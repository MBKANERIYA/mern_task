let mongoose = require("mongoose")

let productSchema = new mongoose.Schema({

    productName: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
        // required:true
    },
    productDesc: {
        type: String,
        required: true
    },
    productPrice: {
        type: String,
        required: true
    },
})


let product = mongoose.model("productSchema", productSchema)

module.exports = product