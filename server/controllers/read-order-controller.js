import { readOrder } from "../services/read-order.js";
export async function readOrderController(req, res) {
	const { id } = req.params;

	readOrder({ id });

	res.status(200).json({ success: true });
}
