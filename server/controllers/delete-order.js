// delete-order.js
const orders = [{ id: 1, customerName: "Alice", total: 200 }];

export function deleteOrder(id) {
	const orderIndex = orders.findIndex((order) => order.id === id);
	if (orderIndex === -1) {
		throw new Error("Order not found");
	}
	orders.splice(orderIndex, 1);
	return { message: "Order deleted successfully" };
}
