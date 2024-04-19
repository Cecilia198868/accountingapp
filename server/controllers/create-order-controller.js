// server/controllers/OrderController.js
import { createOrder } from "../services/create-order";

export const createOrderController = async (req, res) => {
	try {
		// 从请求体中获取订单数据
		const orderData = req.body;
		// 创建订单实例并保存到数据库
		const order = await createOrder(orderData);
		// 发送成功响应
		res.status(201).json(order);
	} catch (error) {
		// 错误处理
		res.status(500).json({ message: error.message });
	}
};
