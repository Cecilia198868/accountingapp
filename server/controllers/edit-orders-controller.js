// edit-order.js
export const orders = [{ id: 1, customerName: "Alice", total: 200 }];

export function editOrders(req, res) {
	try {
		const newOrder = createOrderController(req.body);
		res.status(200).json(newOrder);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
	const orderIndex = orders.findIndex((order) => order.id === id);
	if (orderIndex === -1) {
		throw new Error("Order not found");
	}
	const order = orders[orderIndex];
	const updatedOrder = { ...order, ...orderData };
	orders[orderIndex] = updatedOrder;
	return updatedOrder;
}
