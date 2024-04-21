// edit-order.js
const orders = [{ id: 1, customerName: "Alice", total: 200 }];

export function editOrder(id, orderData) {
	const orderIndex = orders.findIndex((order) => order.id === id);
	if (orderIndex === -1) {
		throw new Error("Order not found");
	}
	const order = orders[orderIndex];
	const updatedOrder = { ...order, ...orderData };
	orders[orderIndex] = updatedOrder;
	return updatedOrder;
}
