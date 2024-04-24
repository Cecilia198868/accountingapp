// delete-order.js
import { orders } from "./create-orders-controller.js";

export function deleteOrders(req, res) {
	const orderId = req.params.id; // 从URL参数获取订单ID

	res.status(204).end();
}
