const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const productDetail = require('../model/product.js');
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
        userpic: req.body.userpic,
        productCode: req.body.productCode,
        productName: req.body.productName,
        productCountry: req.body.productCountry
    };
    var newProduct = new productDetail(data);
    newProduct.save(function (err, result) {
        if (err) { res.status(500).send({ message: err.message }); }
        else {
            res.json(result);
        }
    })
})


router.post('/saveProduct', function (req, res) {
    var data = {
        productCode: req.body.data.productCode,
        productName: req.body.data.productName,
        productCountry: req.body.data.productCountry
    }
    var newProduct = new productDetail(data);
    newProduct.save(function (err, result) {
        if (err) {
            res.status(500).send({ message: err.message });
        }
        else {
            res.json(result);
        }
    });
});
router.get('/list', function (req, res) {
    productDetail.find({}, function (err, docs) {
        if (err) { res.status(500).send({ message: err.message }); }
        else { res.json(docs) };
    })
})

router.put('/updateProduct', function (req, res) {
    var query = { "_id": mongojs.ObjectId(req.body.data._id) }
    console.log(query);
    var update = {
        productCode: req.body.data.productCode,
        productName: req.body.data.productName,
        productCountry: req.body.data.productCountry
    }
    productDetail.findOneAndUpdate(query, update, function (err, docs) {
        if (err) { res.status(500).send({ message: err.message }); }
        else {
            res.json(docs);
        }
        console.log(query);
    })
})
router.delete('/delete/:id', function (req, res) {
    productDetail.findByIdAndRemove(req.params.id, function (err, docs) {
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
            //console.log(docs);
        }
    })
})

module.exports = router;