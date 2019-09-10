var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var student = require('../model/student.js');


router.post('/saveStudent', function (req, res) {

    var data = {
        studentId: req.body.data.studentId,
        studentName: req.body.data.studentName,
        schoolName: req.body.data.schoolName
    }
    var newStudent = new student(data);
    newStudent.save(function (err, result) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            console.log(result);
            res.send({ message: 'success' })
        }
    })
})
router.get('/list', function (req, res) {
    student.find({}, function (err, doc) {
        if (err) { res.status(500).send({ message: err.message }); }
        else { res.json(doc); }
    })
})
router.delete('/delStudent/:id', function (req, res) {
    student.findByIdAndRemove(req.params.id, function (err, docs) {
        if (err) { res.status(500).send({ message: err.message }); }
        else {
            res.json(docs);
            //   console.log(docs);
        }
    })
})
router.put('/updateStudent', function (req, res) {
    var query = { "_id": mongojs.ObjectId(req.body.data._id) }
    // console.log(query);
    var update = {
        studentId: req.body.data.studentId,
        studentName: req.body.data.studentName,
        schoolName: req.body.data.schoolName
    }
    student.findOneAndUpdate(query, update, function (err, docs) {
        if (err) { res.status(500).send({ message: err.message }); }
        else {
            res.json(docs);
        }
        // console.log(query);
    })
})

module.exports = router;