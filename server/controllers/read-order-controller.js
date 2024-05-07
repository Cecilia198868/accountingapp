import { readOrder } from "../services/read-order.js";
export async function readOrderController(req, res) {
	const body = req.body;
	if (!body.name) {
		throw new Error("The name needed");
	}
	if (typeof body.assigned !== "number") {
		throw new Error("Please input number in the assigned field.");
	}
	readOrder({ name: body.name, assigned: body.assigned });
	res.status(200).json({ success: true });
}
