import fs from "node:fs";
import path from "node:path";
import { v4 as uuidv4 } from "uuid";

const scriptRunPath = process.cwd();

export function createOrders(order) {
	const datastorePath = path.join(scriptRunPath, "data-store");
	// 通过path.join方法创建了一个路径，它以当前文件的目录为基础（__dirname是当前执行脚本所在的目录），上移一级（'..'），然后加上'datastore'。这个新路径就是数据存储文件夹的路径。
	if (!fs.existsSync(datastorePath)) {
		fs.mkdirSync(datastorePath);
	}

	const filePath = path.join(datastorePath, "orders.json");

	if (!fs.existsSync(filePath)) {
		fs.writeFileSync(filePath, JSON.stringify([]));
	}

	const buff = fs.readFileSync(filePath);
	const data = buff.toString() || "[]";
	const orders = JSON.parse(data);

	const orderWithIdAndDate = {
		...order,
		id: uuidv4(),
		date: new Date().toISOString(),
	};
	orders.push(orderWithIdAndDate);

	fs.writeFileSync(filePath, JSON.stringify(orders));
}
