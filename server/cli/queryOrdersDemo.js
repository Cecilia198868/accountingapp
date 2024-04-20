import { listOrders } from "./controllers/list-orders-controller";

const searchCriteria = {
	// Criteria 标准
	search: "Alice", // 搜索内容，可以为空
	filter: "shipped", // 筛选条件，可以为空
	page: 2, // 当前页码
	limit: 5, // 每页显示的条数
};

const result = listOrders(searchCriteria);
console.log(result);
