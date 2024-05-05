import { readOs } from "../services/read-orders.js";
import { orders } from "./create-orders-controller.js";

export function updateOrders(req, res) {
	const { id, name, assigned } = JSON.parse(req.body);

	if (!id) {
		return "Id not found";
	}
	if (!name) {
		return "name not found";
	}
	if (!assigned) {
		return "assigned not found";
	}
	readOs({ id: body.id, name: body.name, assigned: body.assigned });
	res.status(200).json(orders);
}
