// 假设orders数组存储了所有的订单，你可以替换为你的数据获取方法
const orders = [
	// 示例订单数据
	// { id: 1, customerName: 'Alice', total: 100, date: '2021-07-16', status: 'shipped', ... }
	// { id: 2, customerName: 'Bob', total: 150, date: '2021-07-17', status: 'processing', ... }
];

export function listOrders({ search, filter, page = 1, limit = 10 }) {
	// 筛选订单
	let filteredOrders = orders;

	// 如果有搜索条件，按客户名称或订单号等字段搜索
	if (search) {
		filteredOrders = filteredOrders.filter(
			(order) =>
				order.customerName.includes(search) || order.id.toString() === search,
		);
	}

	// 如果有筛选条件，如根据订单状态筛选
	if (filter) {
		filteredOrders = filteredOrders.filter((order) => order.status === filter);
	}

	// 计算分页
	const startIndex = (page - 1) * limit; // 从第几条数据开始
	const endIndex = startIndex + limit; // 结束数据的索引

	// 返回当前页面的订单
	const paginatedOrders = filteredOrders.slice(startIndex, endIndex);

	return {
		data: paginatedOrders,
		pageInfo: {
			currentPage: page,
			totalPages: Math.ceil(filteredOrders.length / limit),
			totalOrders: filteredOrders.length,
			limitPerPage: limit,
		},
	};
}
