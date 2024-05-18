import { createOrders } from "../services/create-orders.js";

export async function createOrderController(req, res) {
	const body = req.body;

	const validTypes = ["bills", "needs", "wants"];

	if (!body.type || !validTypes.includes(body.type)) {
		throw new Error("Invalid or missing type");
	}
	if (!body.title) {
		throw new Error("Need title");
	}

	if (!body.amount) {
		throw new Error("Need amount ");
	}
	if (!body.desc !== undefined && typeof body.desc !== "string") {
		throw new Error("Description must be a string");
	}
	createOrders({
		type: body.type,
		title: body.title,
		amount: body.amount,
		desc: body.desc || null,
	});
	res.status(200).json({ success: true });
}
