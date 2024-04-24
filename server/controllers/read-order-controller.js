import { orders } from "./create-orders-controller.js";

export async function readOrder(req, res) {
	const body = JSON.parse(req.body);
	if (!body.name) {
		throw new Error("The name needed");
	}
	if (typeof body.assigned !== "number") {
		throw new Error("Please input number in the assigned field.");
	}
	res.status(200).json(orders);
}
