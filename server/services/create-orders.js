import fs from "node:fs";
import path from "node:path";
import { v4 as uuidv4 } from "uuid";

const scriptRunPath = process.cwd();
// 使用 const scriptRunPath = process.cwd(); 这行代码，你实际上是在创建一个标签，这个标签记载了程序当前工作的目录路径。以后如果程序需要知道它自己在哪里运行，就可以查看这个标签。这有点类似于你每天到办公室后，看一眼门牌号，确认自己是否在正确的房间开始工作。这样做可以帮助确保所有的活动和资源都是在正确的地点被处理和使用。

export function createOrders(order) {
	const datastorePath = path.join(scriptRunPath, "data-store");
	// 通过path.join方法创建了一个路径，它以当前文件的目录为基础（__dirname是当前执行脚本所在的目录），上移一级（'..'），然后加上'datastore'。这个新路径就是数据存储文件夹的路径。
	if (!fs.existsSync(datastorePath)) {
		fs.mkdirSync(datastorePath);
	}
	//    - 判断`datastorePath`指定的路径是否存在。如果不存在，则执行花括号内的代码。
	const filePath = path.join(datastorePath, "orders.json");
	// 想象你在图书馆里找书。datastorePath 就像是指向特定书架的路径，而 "orders.json" 就像是书架上的一本书。使用图书馆的索引系统（类似于 path.join()），你可以确保以最直接和正确的方式找到这本书，而不必担心在图书馆的不同楼层或区域迷路。

	if (!fs.existsSync(filePath)) {
		fs.writeFileSync(filePath, JSON.stringify([]));
	}
	// 检查：首先，你会看看指定的地方（filePath）是否已有一个食谱收藏夹（文件）。如果没有，

	// 创建：你就创建一个新的空白收藏夹，准备好来添加新的食谱。在我们的代码示例中，这相当于创建一个新文件，并在其中写入一个空的列表（这里用于存储数据，类似于食谱的空白页）。

	// 这样，当你确实需要添加食谱时，你就已经有了一个准备好的地方来保存它们，确保一切都井井有条。
	const buff = fs.readFileSync(filePath);
	// 这就像你打开文件柜，找到一个标有“订单信息”的文件夹，然后拿出里面的文件。这个步骤对应代码中的 fs.readFileSync(filePath)，即读取文件的内容。
	const data = buff.toString() || "[]";
	// 将文件中的内容转换成你能理解的语言（比如从手写笔记转换成打印文本）。如果文件是空的，你会使用一张空白的列表作为默认备选。这对应代码中的 buff.toString() || "[]"，即把读取的内容转换为文本，如果没有内容，则使用一个空的列表表示。
	const orders = JSON.parse(data);
	// 最后，你将这些文本信息转换成一个整洁的列表格式，每个项目都清晰地标记，便于查阅。这对应代码中的 JSON.parse(data)，把文本数据转换成结构化的列表。

	const orderWithIdAndDate = {
		...order,
		// 原始订单信息（...order）：这代表了订单的所有已有内容。
		id: uuidv4(),
		// 添加新的唯一标识符（id: uuidv4()）：这是新生成的独一无二的序列号，用于标识这份订单。
		date: new Date().toISOString(),
		// 记录日期和时间（date: new Date().toISOString()）：这是订单生成的精确时间，使用国际标准时间格式记录。
	};
	orders.push(orderWithIdAndDate);

	fs.writeFileSync(filePath, JSON.stringify(orders));
	// 将这个字符串写回到 filePath 指定的文件中。
}
