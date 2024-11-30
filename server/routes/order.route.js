const express = require("express");
const { orderController } = require("../controller");
const route = express.Router();


route.post("/create", orderController.createOrder);
route.get("/get", orderController.getOrders);
route.delete("/delete/:id", orderController.deleteOrder);
route.put("/update/:id", orderController.updateOrder);

module.exports = route;
