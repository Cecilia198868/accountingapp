import { updateOrders } from "../services/update-orders.js";
export function updateOrdersController(req, res) {
	const { type, title, amount } = req.body;
	const { id } = req.params;
	if (!id || !type || !title || !amount) {
		return res
			.status(400)
			.json({ seccess: false, message: "Missing required fields" });
	}

	const isUpdated = updateOrders(id, { type, title, amount });
	if (isUpdated)
		res
			.status(200)
			.json({ success: true, message: "Order updated successfully" });
}
