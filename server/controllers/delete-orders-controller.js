// delete-order.js
import { orders } from "./edit-orders-controller";

export function deleteOrders(req, res) {
	const { orderId } = JSON.parse(req.body);
	function deleteOrder(orderid) {
		const index = orders.findIndex((order) => order.id === orderid);
		if (index !== -1) {
			orders.splice(index, 1);
			return "Order deleted successfully.";
			// biome-ignore lint/style/noUselessElse: <explanation>
		} else {
			return "Order not found";
		}
	}
	const result = deleteOrder(orderId);
	if (result === "Order deleted successfully.") {
		res.status(200).json({ success: true, message: result });
	} else {
		res.status(404).json({ success: false, message: result });
	}
}
