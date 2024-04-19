import { Order } from "./models/order";

export const listOrders = async () => {
	try {
		const orders = await Order.find({});
		return orders;
	} catch (error) {
		// Handle errors
		// biome-ignore lint/complexity/noUselessCatch: <explanation>
		throw error;
	}
};
