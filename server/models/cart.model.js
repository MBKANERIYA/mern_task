let mongoose = require("mongoose")

let cartSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "productSchema",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userSchema",
    },
    quentity: {
        type: Number,
        default: 1
    },
})

let cart = mongoose.model("cartSchema", cartSchema)

module.exports = cart;