import { createOrders } from "../services/create-orders.js";

const types = {
	bills: true,
	needs: true,
	wants: true,
};

export async function createOrderController(req, res) {
	const body = req.body;

	if (!body.title) {
		// title
		throw new Error("Need title");
	}
	if (!types[body.type]) {
		// type
		throw new Error("Type is not defined");
	}
	if (typeof body.desc !== "string") {
		// desc
		throw new Error("Desc need a string");
	}
	createOrders({ title: body.title, type: body.type, desc: body.desc });
	res.status(200).json({ success: true });
}
