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
	// filter 是 JavaScript 数组对象的一个方法，用于创建一个新数组。新数组包含所有通过所提供函数测试的元素。函数返回 true 的元素会被保留，返回 false 的元素会被过滤掉。
	// 对于每个订单对象 order，函数会检查 order.id !== orderId 是否为 true。
	// 	如果 order.id 不等于 orderId，则该订单对象会被保留在新数组中。
	// 如果 order.id 等于 orderId，则该订单对象会被过滤掉。

	const isDeleted = updatedOrders.length !== orders.length;

	fs.writeFileSync(filePath, JSON.stringify(updatedOrders, null, 2));
	console.log("Ordersfile updated.");
	// 语法：fs.writeFileSync(path, data[, options])
	// path：要写入的文件路径。
	// data：要写入文件的数据。
	// options（可选）：写入文件时的选项，可以包含编码、文件模式、标志等。

	// 语法：JSON.stringify(value[, replacer[, space]])
	// value：要转换为 JSON 字符串的值。
	// replacer（可选）：一个函数或数组，用于选择或替换值。
	// space（可选）：用于格式化输出的字符串或数字。如果是数字，表示每个级别缩进的空格数；如果是字符串（如 '\t'），则用该字符串作为缩进。
	return isDeleted;
}
