import fs from "node:fs";
import path from "node:path";

const scriptRunPath = process.cwd();
// 使用`process.cwd()`方法获取当前工作目录的路径。

export function readOrders(order) {
	const datastorePath = path.join(scriptRunPath, "data-store");
	//    使用`path.join`方法拼接路径。它以`scriptRunPath`（当前工作目录）为基础，加上子目录`"data-store"`，从而生成一个指向"data-store"文件夹的完整路径，并赋值给`datastorePath`。
	if (!fs.existsSync(datastorePath)) {
		// 判断`datastorePath`指定的路径是否存在。如果不存在，则执行花括号内的代码。
		fs.mkdirSync(datastorePath);
		// 使用`fs.mkdirSync`方法同步创建一个新的目录，目录路径由`datastorePath`指定。
	}

	const filePath = path.join(datastorePath, "read-orders.json");

	const buff = fs.readFileSync(filePath);
	// 使用`fs.readFileSync`方法同步读取`filePath`指定路径的文件，读取的数据存储在常量`buff`中。
	const data = buff.toString() || "[]";
	// 将`buff`（一个Buffer对象）转换成字符串。如果转换结果为空，则默认为`"[]"`（表示一个空的JSON数组）。
	const orders = JSON.parse(data);
	orders.push(order);

	fs.writeFileSync(filePath, JSON.stringify(orders));
	// 使用`fs.writeFileSync`方法同步写入数据到`filePath`指定的文件。数据通过`JSON.stringify(orders)`转换为字符串格式。
}
