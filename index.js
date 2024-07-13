const express = require("express");
const app = express();
const cors = require("cors")
const database = require("./config/DBconnection")
const userRoutes = require("./routes/user");
const fieldsRoutes = require("./routes/fields")
const dataRoutes = require("./routes/cardData");
const fileUpload = require("express-fileupload");
const { cloudinaryConnect } = require("./config/cloudinary");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 4000;

database.connect();

app.use(cors())
app.use(express.json());
app.use(cookieParser());

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
);

cloudinaryConnect();

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/fields", fieldsRoutes);
app.use("/api/v1/data", dataRoutes);

app.get("/", (req,res)=> {
    res.send("Welcome to do shriram server")
    })

app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});