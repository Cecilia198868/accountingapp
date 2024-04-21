export const orders = [
	{ id: 1, customerName: "Alice", total: 200 },
	{ id: 2, customerName: "Bob", total: 50 },
	{ id: 3, customerName: "Alice", total: 150 },
];

export function readOrders(req, res) {
	const { search, filter, page = 1, limit = 10 } = req.query;

	let filteredOrders = orders;
	if (search) {
		filteredOrders = filteredOrders.filter(
			(order) =>
				order.customerName.toLowerCase().includes(search.toLowerCase()) ||
				order.id.toString() === search,
		);
	}
	if (filter) {
		filteredOrders = filteredOrders.filter((order) => order.status === filter);
	}
	const startIndex = (page - 1) * limit;
	const endIndex = startIndex + limit;
	const paginatedOrders = filteredOrders.slice(startIndex, endIndex);

	res.json({
		data: paginatedOrders,
		pageInfo: {
			currentPage: page,
			totalPages: Math.ceil(filteredOrders.length / limit),
			totalOrders: filteredOrders.length,
			limitPerPage: limit,
		},
	});
}
