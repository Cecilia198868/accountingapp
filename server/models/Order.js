import { entity, field } from "drizzle-orm";

const Order = entity("Order", {
	id: field.number().primary().autoIncrement(),
	// 其他订单相关的字段，比如：
	userId: field.number(),
	totalAmount: field.number(),
	status: field.string(),
	createdAt: field.date(),
	// 根据实际需求添加更多字段
});

module.exports = Order;
