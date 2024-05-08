import { updateOrders } from "../services/update-orders.js";
export function updateOrdersController(req, res) {
	const { id, date, customer, amount } = req.body;
	if (!id) {
		throw new Error("Id not found");
	}
	if (!date) {
		throw new Error("date not found");
	}
	if (!customer) {
		throw new Error("customer not found");
	}
	if (!amount) {
		throw new Error("amount not found");
	}
	updateOrders({ id, date, customer, amount });
	res.status(200).json({ success: true });
}
