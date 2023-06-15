const mongoose = require('mongoose');

const familySchema = new mongoose.Schema({
    fathersName: {
        type: String,
        required: true
    },
    mothersName: {
        type: String,
        required: true
    },
    childrensName: {
        type: Array,
        required: true
    },
    childrensImage: {
        type: Array,
        required: true
    }
}, {timestamps: true})

const familyModel = mongoose.model('familyProfile', familySchema);
module.exports = familyModel;