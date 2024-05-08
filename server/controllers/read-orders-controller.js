import { readOrders } from "../services/read-orders.js";
export function readOrdersController(req, res) {
	const query = req.query;

	const orders = readOrders({
		startDate: query.startDate,
		endDate: query.endDate,
		customer: query.customer,
	});

	res.status(200).json({ success: true, data: orders });
}
