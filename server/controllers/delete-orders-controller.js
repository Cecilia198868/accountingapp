export function deleteOrdersController(req, res) {
	const orderId = req.params.id; // 从URL参数获取订单ID
	// 删除指定ID的订单
	const updatedOrders = orders.filter((order) => order.id !== orderId);

	orders.length = 0; // 清空原数组
	orders.push(...updatedOrders); // 填充新数组
	res.status(204).end();
}
