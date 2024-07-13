const express = require("express");
const router = express.Router();

const { CreateFields, getFormFields, setTemplates, getOverlayBySchool } = require("../controlers/RequiredFields");

router.post("/createFields", CreateFields);
router.post("/getFormFields", getFormFields);
router.post("/setTemplates", setTemplates);
router.post("/getOverlayBySchool", getOverlayBySchool);



module.exports = router