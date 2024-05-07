import { updateOrders } from "../services/update-orders.js";
export function updateOrdersController(req, res) {
	const { id, name, assigned } = req.body;
	if (!id) {
		throw new Error("Id not found");
	}
	if (!name) {
		throw new Error("name not found");
	}
	if (!assigned) {
		throw new Error("assigned not found");
	}
	updateOrders({ id, name, assigned });
	res.status(200).json({ success: true });
}
