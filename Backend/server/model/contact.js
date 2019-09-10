const mongoose = require('mongoose');
const schema = mongoose.Schema;

const contactDetail = new schema({
    userpic: String,
    name: String,
    email: String,
    phone: Number,
    message: String,
});

module.exports = mongoose.model('contactTB', contactDetail);