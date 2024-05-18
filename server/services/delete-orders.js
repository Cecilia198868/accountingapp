import fs from "node:fs";
import path from "node:path";

const scriptRunPath = process.cwd();
// 使用`process.cwd()`方法获取当前工作目录的路径。

export function deleteOrders(orderId) {
	const datastorePath = path.join(scriptRunPath, "data-store");
	//    使用`path.join`方法拼接路径。它以`scriptRunPath`（当前工作目录）为基础，加上子目录`"data-store"`，从而生成一个指向"data-store"文件夹的完整路径，并赋值给`datastorePath`。
	if (!fs.existsSync(datastorePath)) {
		// 判断`datastorePath`指定的路径是否存在。如果不存在，则执行花括号内的代码。
		fs.mkdirSync(datastorePath, { recursive: true });
		// 使用`fs.mkdirSync`方法同步创建一个新的目录，目录路径由`datastorePath`指定。
		console.log("Datestore directory created.");
	}

	const filePath = path.join(datastorePath, "orders.json");
	let orders = [];

	if (fs.existsSync(filePath)) {
		const data = fs.readFileSync(filePath, { encoding: "utf8" });
		orders = JSON.parse(data);
	}
	const updatedOrders = orders.filter((order) => order.id !== orderId);

	const isDeleted = updatedOrders.length !== orders.length;

	fs.writeFileSync(filePath, JSON.stringify(updatedOrders, null, 2));
	console.log("Ordersfile updated.");

	// 使用`fs.writeFileSync`方法同步写入数据到`filePath`指定的文件。数据通过`JSON.stringify(orders)`转换为字符串格式。
	return isDeleted;
}
