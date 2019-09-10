const mongoose = require('mongoose');
const schema = mongoose.Schema;

const productDetail = new schema({
    // _id:String,

    productCode: Number,
    productName: String,
    productCountry: String
});

// Export the model
module.exports = mongoose.model('productTB', productDetail);
//productTB IS THE TABLE NAME