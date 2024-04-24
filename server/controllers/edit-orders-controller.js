import { orders } from "./edit-orders-controller";

export function editOrders(req, res) {
	const { orderId, newName, newAssigned } = JSON.parse(req.body);
	function editOrder(orderId, newName, newAssigned) {
		const order = orders.find((order) => order.id === orderId);
		if (!order) {
			return "Order not found";
		}
		if (newName) {
			order.name = newName.trim();
		}
		if (typeof newAssigned === "number") {
			order.assigned = newAssigned;
		}
		return "update successfully";
	}
	const result = editOrder(orderId, newName, newAssigned);
	if (result === "Order not found") {
		res.status(404).json({ success: false, message: result });
	} else {
		res.status(200).json({ success: true, message: result });
	}
}
