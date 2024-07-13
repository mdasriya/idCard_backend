const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true,
        trim: true,
    },
    Email: {
        type: String,
        required: true,
        trim: true,
    },
    AccountType: {
        type: String,
        enum: ["Admin", "User"],
        required: true,
    },
    Password: {
        type: String,
        // required: true,
    },
    Image: {
        type: String
    },
    Token: {
        type: String,
    },
    // StudentFields : {
    //     type : mongoose.Schema.ObjectId,
    //     ref: "Fields",
    // },
    // EmployeeFields : {
    //     type : mongoose.Schema.ObjectId,
    //     ref: "Fields",
    // },
    // StaffFields : {
    //     type : mongoose.Schema.ObjectId,
    //     ref: "Fields",
    // },
    CardData : {
        type: mongoose.Schema.ObjectId,
        ref: "CardData"
    }
});

module.exports = mongoose.model("User", userSchema);