// queryOrdersCLI.js
import { listOrders } from "./controllers/list-orders-controller";

function queryOrdersCLI(searchCriteria) {
	const result = listOrders(searchCriteria);
	console.log("Query Results:", result);
}

const searchCriteria = {
	search: process.argv[2] || "",
	filter: process.argv[3] || "",
	page: Number.isNaN(Number.parseInt(process.argv[4], 10))
		? 1
		: Number.parseInt(process.argv[4], 10),
	limit: Number.isNaN(Number.parseInt(process.argv[5], 10))
		? 10
		: Number.parseInt(process.argv[5], 10),
};

queryOrdersCLI(searchCriteria);
