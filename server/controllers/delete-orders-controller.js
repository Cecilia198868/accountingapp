// delete-order.js
import { orders } from "./create-orders-controller";

export function deleteOrders(req, res) {
	const orderId = req.params.id; // 从URL参数获取订单ID
	const index = orders.findIndex((order) => order.id === orderId); // 找到对应订单的索引

	if (index === -1) {
		// 如果找不到订单，返回404错误
		return res.status(404).json({ message: "Order not found" });
	}

	// 从数组中删除订单
	orders.splice(index, 1);

	// 返回204状态码，表示删除成功但不返回任何内容
	res.status(204).end();
}
