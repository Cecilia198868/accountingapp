import fs from "node:fs";
import path from "node:path";

const scriptRunPath = process.cwd();
// 使用`process.cwd()`方法获取当前工作目录的路径。
const datastorePath = path.join(scriptRunPath, "data-store");

const filePath = path.join(datastorePath, "orders.json");

export function updateOrders(orderId, newOrderData) {
	if (!fs.existsSync(datastorePath)) {
		// 判断`datastorePath`指定的路径是否存在。如果不存在，则执行花括号内的代码。
		fs.mkdirSync(datastorePath);
		// 使用`fs.mkdirSync`方法同步创建一个新的目录，目录路径由`datastorePath`指定。
	}

	if (!fs.existsSync(filePath)) {
		throw new Error("The file didn't find.");
	}

	const data = fs.readFileSync(filePath, "utf-8");
	// 	// 使用`fs.readFileSync`方法同步读取`filePath`指定路径的文件，读取的数据存储在常量`buff`中。

	const orders = JSON.parse(data);

	const orderIndex = orders.findIndex((order) => order.id === orderId);

	if (orderIndex === 0) {
		throw new Error("No orderIndex");
	}
	orders[orderIndex] = { ...orders[orderIndex], ...newOrderData };
	fs.writeFileSync(filePath, JSON.stringify(orders, null, 2));
}
