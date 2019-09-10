const mongoose = require('mongoose');
const schema = mongoose.Schema;

const StudentDetail = new schema({

    studentId: Number,
    studentName: String,
    schoolName: String
})

module.exports = mongoose.model('studentTable', StudentDetail);