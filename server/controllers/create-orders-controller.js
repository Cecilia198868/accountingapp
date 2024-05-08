import { createOrders } from "../services/create-orders.js";

export async function createOrderController(req, res) {
	const body = req.body;

	if (!body.id) {
		throw new Error("Need id");
	}
	if (!body.date) {
		throw new Error("Need date");
	}
	if (!body.customer) {
		throw new Error("Need customer");
	}
	if (!body.amount) {
		throw new Error("Need amount");
	}
	createOrders({
		id: body.id,
		date: body.date,
		customer: body.customer,
		amount: body.amount,
	});
	res.status(200).json({ success: true });
}
