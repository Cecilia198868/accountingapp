const orders = [
	{ id: 1, customerName: "Alice", total: 200 },
	{ id: 2, customerName: "Bob", total: 50 },
	{ id: 3, customerName: "Alice", total: 150 },
];

export function listOrders({ search, filter, page = 1, limit = 10 }) {
	const filteredOrders = orders;
	if (search) {
		// biome-ignore lint/correctness/noConstAssign: <explanation>
		filteredOrders = filteredOrders.filter(
			(order) =>
				order.customerName.includes(search) || order.id.toString() === search,
		);
	}
	if (filter) {
		// biome-ignore lint/correctness/noConstAssign: <explanation>
		filteredOrders = filteredOrders.filter((order) => order.status === filter);
	}
	const startIndex = (page - 1) * limit;
	const endIndex = startIndex + limit;
	const paginatedOrders = filteredOrders.slice(startIndex, endIndex);

	return {
		data: paginatedOrders,
		pageInfo: {
			currentPage: page,
			totalPages: Math.ceil(filteredOrders.length / limit),
			totleOrders: filteredOrders.length,
			limitPerPage: limit,
		},
	};
}
