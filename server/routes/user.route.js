let express = require("express")
const { userController } = require("../controller")
const { tokenVerify, isAdmin } = require("../middleware/validations/jwtVerify")

let route = express.Router()

route.post("/create", userController.register)
route.post("/login", userController.login)
route.get("/recive", tokenVerify, isAdmin, userController.getUsers)
route.delete("/delete/:id", userController.deleteUser)

module.exports = route