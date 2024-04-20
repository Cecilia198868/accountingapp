const orders = [];

export async function createOrderController(orderData) {
	try {
		if (!orderData || !orderData.items || orderData.items.length === 0) {
			throw new Error("Invalid order data");
		}
		const newOrderId = orders.length + 1;
		const newOrder = { id: newOrderId, ...orderData };
		orders.push(newOrder);
		return newOrder;
	} catch (error) {
		throw new Error(`Order creation failed:${error.message}`);
		// 在${}内部放入你的代码，这段代码的结果会被转换为字符串并包含在整个字符串中。
	}
}
