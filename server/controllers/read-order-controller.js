import { orders } from "./edit-orders-controller";

export async function readOrderController(req, res) {
	try {
		const body = JSON.parse(req.body);
		if (!body.name) {
			throw new Error("The name needed");
		}
		if (typeof body.assigned !== "Number") {
			throw new Error("Please input number in the assigned field.");
		}
		if (!body.available) {
			throw new Error("The available is needed");
		}
		const order = orders.find(
			(order) =>
				order.Name.trim().toLowerCase() === body.name.trim().toLowerCase(),
		);
		// 如果找到匹配的订单，返回订单详情
		if (order) {
			res.status(200).json(order);
		} else {
			// 如果没有找到，返回错误
			res.status(404).json({ success: false, message: "Order not found." });
		}
	} catch (err) {
		res.status(400).json({ success: false, message: err.message });
	}
}
