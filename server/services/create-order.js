import { Order } from "../models/Order";
import { sendConfirmationEmail } from "../services/emailService"; // 添加了这行来导入邮件发送服务

/**
 * 创建一个新订单。
 *
 * @param {Object} orderData 包含订单信息的对象。
 * @returns {Promise<Object>} 创建的订单对象。
 */
export async function createOrder(orderData) {
	try {
		// 验证订单数据的完整性和正确性
		if (!orderData.userId) {
			throw new Error("User ID is required to create an order.");
		}
		if (!orderData.totalAmount || orderData.totalAmount <= 0) {
			throw new Error("Total amount must be a positive number.");
		}
		// 可以添加更多验证...

		// 创建新订单实例
		const newOrder = await Order.create({
			userId: orderData.userId,
			totalAmount: orderData.totalAmount,
			status: orderData.status || "pending", // 如果状态没有提供，则默认为pending
			createdAt: new Date(), // 设置订单的创建时间
			// ...添加其他订单数据
		});

		// 处理创建订单后的逻辑（例如发送确认邮件）
		await sendConfirmationEmail(newOrder);

		return newOrder;
	} catch (error) {
		// 错误处理，可能是抛出错误或记录错误
		console.error("Error creating order:", error);
		throw error;
	}
}
