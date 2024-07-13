const Fields = require("../models/RequiredFields")
const User = require("../models/UserData");
const { uploadImageToCloudinary } = require("../utils/imageUploader");


exports.CreateFields = async (req, res) => {
  try {
    const {
      schoolName,
      template,
      role,
      name = false,
      classN = false,
      section = false,
      dateofBirth = false,
      admissionNumber = false,
      rollNumber = false,
      contactNumber = false,
      emergencyContact = false,
      bloodGroup = false,
      uploadYourPhoto = false,
      address = false,
      modeOfTransportation = false,
      designation = false,
      aadharCard = false,
      _id
    } = req.body;

    // Find the user by _id
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    console.log("User found: ", user);

    // Create a new Fields document
    const fields = await Fields.create({
      schoolName,
      template,
      role,
      name,
      classN,
      section,
      dateofBirth,
      admissionNumber,
      rollNumber,
      contactNumber,
      emergencyContact,
      bloodGroup,
      uploadYourPhoto,
      address,
      modeOfTransportation,
      designation,
      aadharCard,
      admin: _id
    });
    console.log("Fields created: ", fields);

    // Update the user based on the role
    // if (role === "Student") {
    //   user.StudentFields = fields._id;
    // } else if (role === "Employee") {
    //   user.EmployeeFields = fields._id;
    // } else if (role === "Staff") {
    //   user.StaffFields = fields._id;
    // }

    // // Save the updated user
    // const savedUser = await user.save();
    // console.log("User updated: ", savedUser);

    // Respond with success
    return res.status(200).json({
      success: true,
      fields,
      message: "Fields created successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.getFormFields = async (req, res) => {
  try {
    const { _id } = req.body;
    console.log("req.body ", req.body);

    // let user = {};
    // if (role === "Student") {
    //   user = await User.findById(_id).populate('StudentFields').exec();
    // } else if (role === "Employee") {
    //   user = await User.findById(_id).populate('EmployeeFields').exec();
    // } else if (role === "Staff") {
    //   user = await User.findById(_id).populate('StaffFields').exec();
    // }

    const formfield = await Fields.findById(_id);

    if (!formfield) {
      return res.status(400).json({
        success: false,
        message: "Form Field not Found",
      });
    }

    return res.status(200).json({
      success: true,
      formfield,
      message: `form fiels get succesfuly`,
    });
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Please try again.",
    });
  }
};

exports.setTemplates = async (req, res) => {
  try {
    const { school } = req.body
    console.log("req.body : ", req.body);
    console.log("req.files : ", req.files);

    const field = await Fields.findOne({ schoolName: school });

    if (!field) {
      return res.status(404).json({
        success: false,
        message: "Fields Not Found",
      })
    }

    console.log("field : ", field);

    let VTemp = ""
    if (req.files) {
      const img = req.files.VTemp;
      const Folder = process.env.FOLDER_NAME;
      const responce = await uploadImageToCloudinary(img, Folder);
      VTemp = responce.secure_url
    }

    let HTemp = ""
    if (req.files) {
      const img = req.files.HTemp;
      const Folder = process.env.FOLDER_NAME;
      const responce = await uploadImageToCloudinary(img, Folder);
      HTemp = responce.secure_url
    }

    field.vtemp = VTemp,
    field.htemp = HTemp
    console.log("data")
    const updatedFields = await field.save();

    return res.status(200).json({
      success: true,
      updatedFields,
      message: "Data Saved Successfully",
    })
  }
  catch (error) {
    console.log("error : ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    })
  }
}

exports.getOverlayBySchool = async (req, res) => {
  try {
    const { schoolName } = req.body;
    console.log("res.body : ", req.body);

    if (!schoolName) {
      return res.status(404).json({
        success: false,
        message: "School Name is Mendetory"
      })
    }

    const field = await Fields.findOne({ schoolName: schoolName })

    if (!field) {
      return res.status(404).json({
        success: false,
        message: "School Name is Not Present"
      })
    }

    return res.status(200).json({
      success: true,
      field,
      message: "Data Fetch Successfully"
    })
  }
  catch (error) {
    console.log("Error : ", error)
    return res.status(500).json({
      success: false,
      message: "Internal Sever Error",
    })
  }
}