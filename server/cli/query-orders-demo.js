import { listOrders } from "../controllers/list-orders-controller";

const searchCriteria = {
	search: "Alice",
	filter: "shipped",
	page: 2,
	limit: 5,
};

constresult = listOrders(searchCriteria);

console.log(result);
