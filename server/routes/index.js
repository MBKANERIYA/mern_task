let express = require("express")
let userRouter = require("./user.route")
let productRoute = require("./product.route")
let cartRoute = require("./cart.route")
let orderRoute = require("./order.route")

let routes = express.Router()

routes.use("/user", userRouter)
routes.use("/product", productRoute)
routes.use("/cart", cartRoute)
routes.use("/order", orderRoute)

module.exports = routes