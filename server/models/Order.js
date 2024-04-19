import drizzle from "../db";
import { entity, field } from "drizzle-orm";

export const Order = entity("Order", {
	id: field.number().primary().autoIncrement(),
	userId: field.number().foreignKey("User", "id"), // 外键指向User实体的id
	totalAmount: field.number().required(), // 订单总金额
	status: field.string().default("pending"), // 订单状态，默认为待处理
	createdAt: field.date().default(() => new Date()), // 订单创建时间，默认为当前时间
	paymentMethod: field.string().nullable(), // 支付方式
	transactionId: field.string().nullable().unique(), // 交易号，假设它是唯一的
	paymentStatus: field.string().default("unpaid"), // 支付状态，默认为未支付
	currencyType: field.string().default("CNY"), // 货币类型，默认为人民币
	updatedAt: field
		.date()
		.default(() => new Date())
		.onUpdate(() => new Date()), // 最后更新时间
	notes: field.string().nullable(), // 备注，可为空
});
