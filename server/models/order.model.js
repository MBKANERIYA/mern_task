const mongoose = require("mongoose");

let orderSchema = new mongoose.Schema({
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cartSchema",
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "productSchema",
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userSchema",
        required: true
    },
    orderStatus: {
        type: String,
        enum: ['Pending', 'Completed', 'Shipped', 'Cancelled'],
        default: 'Pending'
    },
    totalAmount: {
        type: Number,
        required: true
    },
    placedDate: {
        type: Date,
        default: Date.now
    }
});

let Order = mongoose.model("orderSchema", orderSchema);

module.exports = Order;
