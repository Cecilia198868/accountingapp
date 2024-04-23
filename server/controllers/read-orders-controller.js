export const orders = [
	{ id: 1, customerName: "Alice", total: 200 },
	{ id: 2, customerName: "Bob", total: 50 },
	{ id: 3, customerName: "Alice", total: 150 },
];

export function readOrdersController(req, res) {
	const query = req.query;
	if (typeof query.limit !== "number" || query.limit > 100) {
		throw new Error("limit need less 100");
	}
	if (typeof query.offset !== "number") {
		throw new Error("need offset params");
	}
	res.status(200).json(orders);
}
