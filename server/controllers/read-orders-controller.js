import { readOrders } from "../services/read-orders.js";
export function readOrdersController(req, res) {
	const query = req.query;
	if (typeof query.limit !== "number" || query.limit > 100) {
		throw new Error("limit need less 100");
	}
	if (typeof query.offset !== "number") {
		throw new Error("need offset params");
	}
	readOrders({ limit, offset });
	res.status(200).json({ success: true });
}
