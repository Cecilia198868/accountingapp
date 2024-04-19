import listOrdersService from "../services/list-orders";

export const listOrdersController = async (req, res) => {
	try {
		const orders = await listOrdersService();
		res.json(orders);
	} catch (error) {
		res.status(500).send(error.message);
	}
};
