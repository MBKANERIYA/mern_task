const { cartSchema } = require("../models")

module.exports.createCart = (body) => {
    return cartSchema.create(body)
}

module.exports.getAllCart = () => {
    return cartSchema.find().populate("product").populate("user", "email")
}

module.exports.findByIdAndDelete = (id) => {
    return cartSchema.findByIdAndDelete(id)
}

module.exports.findByIdAndUpdate = (id, newBody) => {
    return cartSchema.findByIdAndUpdate(id, newBody)
}

module.exports.findById = (id) => {
    return cartSchema.findOne({ id })
}