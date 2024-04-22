import { readOrders } from "../controllers/read-orders-controller";

const searchCriteria = {
	search: "Alice",
	filter: "shipped",
	page: 2,
	limit: 5,
};

constresult = readOrders(searchCriteria);

console.log(result);
