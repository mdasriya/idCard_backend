const express = require("express");
const router = express.Router();

const { saveCardData, getAllEntryes, ApproveCard } = require("../controlers/CardData");
const { auth } = require("../controlers/User");


router.post("/setCardData", saveCardData);
// router.delete("/")
router.get("/getAllEntryes",  getAllEntryes);
router.put("/approveCard",  ApproveCard);

module.exports = router