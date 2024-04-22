export const orders = [];
export async function createOrderController(req, res) {
	try {
		const newOrder = createOrderController(req.body);
		res.status(200).json(newOrder);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
	try {
		if (!orderData) {
			throw new Error("invalid order data");
		}
		if (!orderData.title) {
			throw new Error("invalid order title");
		}
		const newOrderId = orders.length + 1;
		const newOrder = { it: newOrderId, ...orderData };
		orders.push(newOrder);
		return newOrder;
	} catch (error) {
		throw new Error(`Order creation failed:${error.message}`);
	}
}
