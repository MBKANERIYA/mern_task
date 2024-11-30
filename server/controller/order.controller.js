const { orderService } = require("../services");

module.exports.createOrder = async (req, res) => {
    try {
        let body = req.body;
        let order = await orderService.createOrder(body);

        res.status(201).json({
            message: "Order created successfully",
            order
        });
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
};

module.exports.getOrders = async (req, res) => {
    try {
        let orders = await orderService.getAllOrders();
        res.status(200).json({
            message: "Orders fetched successfully",
            orders
        });
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
};

module.exports.deleteOrder = async (req, res) => {
    try {
        let { id } = req.params;
        let order = await orderService.findByIdAndDelete(id);
        res.status(200).json({
            message: "Order deleted successfully",
            order
        });
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
};

module.exports.updateOrder = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body;

        let updatedOrder = await orderService.findByIdAndUpdate(id, body);
        res.status(200).json({
            message: "Order updated successfully",
            updatedOrder
        });
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
};
