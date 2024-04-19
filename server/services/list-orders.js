import { Order } from "./models/Order";

/**
 * 列出订单，可以按用户、日期范围、状态和排序进行过滤。
 *
 * @param {Object} filter 过滤条件，可以包含 userId, startDate, endDate, status, orderBy 等。
 * @returns {Promise<Array>} 匹配过滤条件的订单数组。
 */
export async function listOrders({
	userId,
	startDate,
	endDate,
	status,
	orderBy = "createdAt",
	orderDirection = "DESC", // 默认按创建时间降序排列
} = {}) {
	// 创建查询条件
	const whereClause = {};
	if (userId) whereClause.userId = userId;
	if (status) whereClause.status = status;
	if (startDate) whereClause.createdAt = { $gte: new Date(startDate) };
	if (endDate)
		whereClause.createdAt = {
			...whereClause.createdAt,
			$lte: new Date(endDate),
		};

	// 构建查询
	const query = {
		where: whereClause,
		order: [[orderBy, orderDirection]], // 排序
	};

	try {
		// 查询数据库获取订单
		const orders = await Order.findAll(query);
		return orders;
	} catch (error) {
		// 如果有错误发生，你可以在这里处理它
		console.error("Error listing orders:", error);
		throw error; // 或者根据你的错误处理策略来处理
	}
}
