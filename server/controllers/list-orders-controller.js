import { listOrders } from "../services/list-orders";

export async function listOrdersController(req, res) {
	try {
		// 获取查询参数
		const queryParams = req.query;

		// 调用服务列出订单，传递任何查询参数
		const orders = await listOrders(queryParams);

		// 成功，返回200状态码和订单列表
		res.status(200).json(orders);
	} catch (error) {
		// 错误处理，返回相应的错误状态码和消息
		res.status(500).json({ message: error.message });
	}
}
