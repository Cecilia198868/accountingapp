import fs from "node:fs";
import path from "node:path";

const scriptRunPath = process.cwd();

export function createOrders(order) {
	const datastorePath = path.join(scriptRunPath, "data-store");
	// 通过path.join方法创建了一个路径，它以当前文件的目录为基础（__dirname是当前执行脚本所在的目录），上移一级（'..'），然后加上'datastore'。这个新路径就是数据存储文件夹的路径。
	if (!fs.existsSync(datastorePath)) {
		fs.mkdirSync(datastorePath);
	}

	const filePath = path.join(datastorePath, "orders.json");

	const buff = fs.readFileSync(filePath);
	const data = buff.toString() || "[]";
	const orders = JSON.parse(data);
	orders.push(order);

	fs.writeFileSync(filePath, JSON.stringify(orders));
}
