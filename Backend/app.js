const express = require('express');
// initialize our express app
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var path = require('path');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {

    res.header('Access-Control-Allow-Origin', '*'),
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'),
        res.header('Access-Control-Allow-Headers', 'Content-Type'),
        res.header('Access-Control-Allow-Credentials', true),

        next();
});

app.use(express.static(path.join(__dirname, 'uploads')));

mongoose.connect('mongodb://localhost/productDetailDB'); // db name
var productAPI = require('./server/route/product-api.js');
var registerAPI = require('./server/route/register-api.js');
var studentAPI = require('./server/route/student-api.js');
var contactAPI = require('./server/route/contact-api.js');

app.use('/product', productAPI);
app.use('/register', registerAPI);
app.use('/student', studentAPI);
app.use('/contact', contactAPI);

app.get('/', function (req, res) {
    res.send('Hello Mongo hi');
});
app.get('/list', function (req, res) {
    res.send({ message: 'Hello Node Sanjay' });
});

app.listen(3000);
console.log('http://localhost:3000');