const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const contactDetail = require('../model/contact.js');
var multer = require('multer');
var fs = require('fs');


var filename = '';
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        filename = file.originalname;
        cb(null, filename);
    }
});

var upload = multer({ storage: storage });
router.post('/save2', upload.array("uploads[]", 12), function (req, res) {
    var data = {
        userpic: filename,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message
    };
    console.log(data);
    var newContact = new contactDetail(data);
    newContact.save(function (err, result) {
        if (err) {
            res.status(500).send({ message: err.message });
            console.log(data);
        }
        else {
            res.json(result);
        }
    })
})


router.post('/saveContactData', (req, res) => {

    var data = {
        name: req.body.data.name,
        email: req.body.data.email,
        phone: req.body.data.phone,
        message: req.body.data.message
    }
    var newContact = new contactDetail(data);

    newContact.save((err, result) => {

        if (err) {
            res.status(500).send({ message: err.message })
        }
        else {
            res.json(result);
        }
    });
    console.log(data);
});

router.get('/list', (req, res) => {
    contactDetail.find({}, (err, doc) => {
        if (err) {
            res.status(500).send({ message: err.message });
        }
        else {
            res.json(doc)
        };
    });
})

router.delete('/delete/:id', function (req, res) {
    contactDetail.findByIdAndRemove(req.params.id, function (err, docs) {
        if (err) { res.status(500).send({ message: err.message }); }
        else {

            console.log(docs);

            fs.exists('./uploads/' + docs.userpic, function (result) {
                console.log(result);
                if (result) {
                    fs.unlink('./uploads/' + docs.userpic, function (err1) {
                        if (err1) { }
                    });
                    res.json(docs);
                }
            })

        }
    })
})







router.put('/updateContact', (req, res) => {
    var query = { "_id": mongojs.ObjectId(req.body.data._id) }
    var update = {
        name: req.body.data.name,
        email: req.body.data.email,
        phone: req.body.data.phone,
        message: req.body.data.message
    }
    contactDetail.findOneAndUpdate(query, update, (err, docs) => {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        else {
            res.json(docs);
        }
        console.log(query);
    })
})

module.exports = router;