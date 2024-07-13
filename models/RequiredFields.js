const mongoose = require("mongoose")

const RequiredFieldsSchema = mongoose.Schema({
    schoolName: {
        type: String,
        required: true,
    },
    vtemp: {
        type: String,
    },
    htemp: {
        type: String,
    },
    template: {
        type: String,
        required: true,
    },
    role: {
        type : String,
        required: true,
    },
    name:{
        type : Boolean,
        required: true,
    },
    classN: {
        type : Boolean,
        required: true,
    },
    section: {
        type : Boolean,
        required: true,
    },
    dateofBirth: {
        type : Boolean,
        required: true,
    },
    admissionNumber: {
        type : Boolean,
        required: true,
    },
    rollNumber: {
        type : Boolean,
        required: true,
    },
    contactNumber: {
        type : Boolean,
        required: true,
    },
    emergencyContact: {
        type : Boolean,
        required: true,
    },
    bloodGroup: {
        type : Boolean,
        required: true,
    },
    uploadYourPhoto: {
        type : Boolean,
        required: true,
    },
    address: {
        type : Boolean,
        required: true,
    },
    modeOfTransportation: {
        type : Boolean,
        required: true,
    },
    designation: {
        type : Boolean,
        required: true,
    },
    aadharCard: {
        type : Boolean,
        required: true,
    },
    admin : {
        type : mongoose.Schema.ObjectId,
        ref: "User"
    },
    user: [{
        type: mongoose.Schema.ObjectId,
        ref: "CardData",
    }]
})

module.exports = mongoose.model("Fields", RequiredFieldsSchema);