import { updateOrders } from "../services/update-orders.js";
export function updateOrdersController(req, res) {
	const { id, type, title, amount } = req.body;
	if (!id) {
		throw new Error("id not found");
	}
	if (!type) {
		throw new Error("type not found");
	}
	if (!title) {
		throw new Error("title not found");
	}

	if (!amount) {
		throw new Error("amount not found");
	}
	updateOrders({ type, title, amount });
	res.status(200).json({ success: true });
}
