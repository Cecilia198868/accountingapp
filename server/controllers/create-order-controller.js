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
		throw new Errow(`Order creation failed: ${error.message}`);
	}
}
