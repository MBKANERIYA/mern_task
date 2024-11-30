const { orderSchema } = require("../models");

module.exports.createOrder = (body) => {
    return orderSchema.create(body);
};

module.exports.getAllOrders = () => {
    return orderSchema.find().populate("user").populate("cart").populate("product");
};

module.exports.findByIdAndDelete = (id) => {
    return orderSchema.findByIdAndDelete(id);
};

module.exports.findByIdAndUpdate = (id, body) => {
    return orderSchema.findByIdAndUpdate(id, body, { new: true });
};
