let express = require("express")
const { productController } = require("../controller")
const upload = require("../middleware/uplad")

let route = express.Router()

route.post("/create", upload.single("productImage"), productController.Create)
route.get("/get", productController.findProduct)
route.delete("/delete/:id", productController.removeProduct)
route.put("/update/:id", productController.updateProduct)

module.exports = route