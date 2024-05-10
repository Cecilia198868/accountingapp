import { deleteOrders } from "../services/delete-orders.js";
export function deleteOrdersController(req, res) {
	console.log("URL Parameters:", req.params); // 输出所有URL参数
	const id = req.params.id;
	if (!id) {
		console.log("No id provided in the request");
		return res
			.status(400)
			.json({ seccess: false, message: "No order Id provided" });
	}

	try {
		// 等待删除结果
		const isDeleted = deleteOrders(id);
		console.log("Deletion result:", isDeleted); // 日志输出删除结果
		if (isDeleted) {
			res
				.status(200)
				.json({ success: true, message: "Order deleted successfully" });
		} else {
			res.status(404).json({ seccess: false, message: "Order not found" });
		}
	} catch (error) {
		console.error("Deletion error:", error); // 错误日志
		res.status(500).json({ success: false, message: error.message });
	}
}

// import { deleteOrders } from "../services/delete-orders.js";
// export function deleteOrdersController(req, res) {
// 	const { ids } = req.body;
// 	deleteOrders({ ids });
// 	res
// 		.status(204)
// 		.json({ success: true, message: "Orders deleted successfully" });
// }
