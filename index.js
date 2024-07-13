const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

const database = require("./config/DBconnection");
const userRoutes = require("./routes/user");
const fieldsRoutes = require("./routes/fields");
const dataRoutes = require("./routes/cardData");
const { cloudinaryConnect } = require("./config/cloudinary");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// Connect to the database
database.connect();

// Cloudinary configuration
cloudinaryConnect();

// Routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/fields", fieldsRoutes);
app.use("/api/v1/data", dataRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to do shriram server");
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
