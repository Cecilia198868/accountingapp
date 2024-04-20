export async function createOrderController(req, res) {
	try {
		// 从请求体中获取订单数据
		const orderData = req.body;

		// 创建成功，返回201状态码和新创建的订单
		res.status(200).json(newOrder);
	} catch (error) {
		// 错误处理，返回相应的错误状态码和消息
		res.status(500).json({ message: error.message });
	}
}
