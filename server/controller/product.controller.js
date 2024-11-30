const uploadImage = require("../middleware/cloudinary");
const { productService } = require("../services")

module.exports.Create = async (req, res) => {
    try {
        let body = req.body


        let { path, originalname } = req.file;

        let cloud = await uploadImage(path, originalname);

        let newBody = {
            ...body,
            productImage: cloud.url,
        };

        let product = await productService.createProduct(newBody)
        res.status(201).json({
            message: "PRODUCT CREATED SUCCESSFULLY",
            product
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}

module.exports.findProduct = async (req, res) => {
    try {
        let product = await productService.findAllProduct()
        res.status(200).json({
            message: "GET ALL PRODUCT SUCCESSFULLY",
            product
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}

module.exports.removeProduct = async (req, res) => {
    try {
        let { id } = req.params
        let product = await productService.findByIdAndDelete(id)
        res.status(200).json({
            message: "PRODUCT DELETED SUCCESSFULLY",
            product
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}

module.exports.updateProduct = async (req, res) => {
    try {
        let { id } = req.params
        let body = req.body
        let newBody = {
            ...body,
            id
        }
        let product = await productService.findByIdAndUpdate(id, body)
        res.status(200).json({
            message: "UPDATE PRODUCT SUCCESSFULLY",
            newBody
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}