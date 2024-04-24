import { orders } from "./create-orders-controller";

export function updateOrders(req, res) {
	const { orderId, newName, newAssigned } = JSON.parse(req.body);

	if (!orderId) {
		return "OrderId not found";
	}
	if (!newName) {
		return "newName not found";
	}
	if (!newAssigned) {
		return "newAssigned not found";
	}

	res.status(200).json(orders);
}
