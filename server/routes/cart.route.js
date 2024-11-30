let express = require("express")
const { cartController } = require("../controller")
const { login } = require("../controller/user.controller")

let route = express.Router()

route.post("/createCart", cartController.addCart)
route.get("/getCart", cartController.getCart)
route.delete("/delete/:id", cartController.deleteFromCart)
route.put("/update/:id", cartController.cartUpdate)

module.exports = route