const { productSchema } = require("../models")

module.exports.createProduct = (body) => {
    return productSchema.create(body)
}

module.exports.findAllProduct = () => {
    return productSchema.find()
}

module.exports.findByIdAndDelete = (id) => {
    return productSchema.findByIdAndDelete(id)
}

module.exports.findByIdAndUpdate = (id, body) => {
    return productSchema.findByIdAndUpdate(id, body)
}