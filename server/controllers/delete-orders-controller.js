import { deleteOrders } from "../services/delete-orders.js";
export function deleteOrdersController(req, res) {
	const id = req.params.id;
	if (!id) {
		return res
			.status(400)
			.json({ success: false, message: "No order Id provided" });
	}

	try {
		// 等待删除结果
		const isDeleted = deleteOrders(id);

		if (isDeleted) {
			res
				.status(200)
				.json({ success: true, message: "Order deleted successfully" });
		} else {
			res.status(404).json({ seccess: false, message: "Order not found" });
		}
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
}
