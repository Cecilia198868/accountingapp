import { readOrders } from "../services/read-orders.js";

export async function readOrdersController(req, res) {
	let limit = Number.parseInt(req.query.limit, 10);
	let offset = Number.parseInt(req.query.offset, 5);

	limit = Number.isNaN(limit) ? 10 : limit;
	offset = Number.isNaN(offset) ? 5 : offset;
	try {
		const orders = await readOrders({
			limit,
			offset,
		});
		res.status(200).json({ success: true, data: orders });
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
}
