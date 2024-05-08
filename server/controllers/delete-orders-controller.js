import { deleteOrders } from "../services/delete-orders.js";
export function deleteOrdersController(req, res) {
	const { ids } = req.body;
	deleteOrders({ ids });
	res
		.status(204)
		.json({ success: true, message: "Orders deleted successfully" });
}
