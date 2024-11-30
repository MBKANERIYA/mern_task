const { cartSchema } = require("../models")
const { cartService } = require("../services")

module.exports.addCart = async (req, res) => {
    try {
        let body = req.body
        let productId = body.product

        let existingcartitem = await cartSchema.findOne({ product: productId })
        console.log(existingcartitem);

        if (existingcartitem) {
            res.status(401).json({
                message: "Itema already in cart"
            })
        } else {
            let cart = await cartService.createCart(body)

            res.status(201).json({
                message: "PRODUCT ADDED TO CART SUCCESSFULLY",
                cart
            })
        }
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}

module.exports.getCart = async (req, res) => {
    try {
        let cart = await cartService.getAllCart();

        res.status(200).json({
            message: "GET CART SUCCESSFULLY",
            cart
        });
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
};


module.exports.deleteFromCart = async (req, res) => {
    try {
        let { id } = req.params
        let cart = await cartService.findByIdAndDelete(id)
        res.status(200).json({
            message: "DELETE PRODUCT FROM CART SUCCESSFULLY",
            cart
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}

module.exports.cartUpdate = async (req, res) => {
    try {
        let { id } = req.params
        let { quentity } = req.body

        let newBody = { quentity };
        let cart = await cartService.findByIdAndUpdate(id, newBody)
        res.status(200).json({
            message: "CART UPDATED SUCCESSFULLY",
            cart
        })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}