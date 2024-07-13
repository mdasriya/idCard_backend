const mongoose = require("mongoose")

const CardDataSchema = mongoose.Schema({
    template: {
        type: String,
        required: true,
    },
    aadharnumber: {
        type: Number,
        trim:true, 
    },
    name: {
        type: String,
        trim: true,
    },
    section: {
        type: String,
        trim: true,
    },
    contactNumber: {
        type: Number,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
    },
    Class: {
        type: String,
        trim: true,
    },
    dateofBirth: {
        type: Date,
        trim: true,
    },
    uploadyourPassport: {
        type: String,
    },
    admissionNo: {
        type: Number,
        trim: true,
    },
    bloodGroup: {
        type: String,
        trim: true,
    },
    designation: {
        type: String,
        trim: true,
    },
    rollNo: {
        type: Number,
        trim: true,
    },
    emergencyConNo: {
        type: Number,
        trim: true,
    },
    modeOfTransportation: {
        type: String,
        trim: true,
    },
    role: {
        type: String,
        trim: true,
    },
    schoolName : {
        type: String,
        trim: true,
    },
    isApprove: {
        type: Boolean,
    },
    admin :{
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    formField : {
        type: mongoose.Schema.ObjectId,
        ref: "Fields"
    }
})

module.exports = mongoose.model("CardData", CardDataSchema);