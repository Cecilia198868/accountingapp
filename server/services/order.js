import fs from "node:fs";
import path from "node:path";

const orderFilePath = path.join(__dirname, "../data-store/orders.json");
export function addOrder(newOrder) {
	return new Promise((resolve, reject) => {
		// 函数返回一个新的 Promise 对象，这是异步编程的一种常用模式，用于处理可能需要等待的操作（如文件读写）。Promise 接受一个执行器函数，这个函数有两个参数：`resolve` 和 `reject`，分别用于在异步操作成功时或失败时调用。
		fs.readFile(orderFilePath, (err, data) => {
			// 使用 `fs.readFile` 异步读取 orderFilePath指定的文件。读取完成后，调用回调函数，该函数接收两个参数：`err`（错误信息）和 `data`（文件内容）。
			if (err) reject(err);
			// 如果读取文件时出现错误，调用 `reject` 函数，并将错误对象 `err` 传递给它，这将导致 Promise 被拒绝。
			const orders = JSON.parse(data);
			orders.push(newOrder);
			fs.writeFile(orderFilePath, JSON.stringify(orders, null, 2), (err) => {
				// 使用 `fs.writeFile` 异步写入更新后的订单数组到文件orderFilePath。`JSON.stringify(orders, null, 2)` 将订单数组转换成格式化的 JSON 字符串。
				if (err) reject(err);
				// 如果写入文件时发生错误，调用 `reject` 函数，并传递错误对象 `err`。
				resolve();
				// 如果文件读取和写入都成功完成，调用 `resolve` 函数，表示 Promise 已成功解决。
			});
		});
	});
}

// 通过这段代码，可以实现将新订单数据异步写入到 JSON 文件中，这个过程通过 Promise 实现错误处理和成功的回调处理。
