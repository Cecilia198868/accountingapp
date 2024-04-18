import { Drizzle, SQLiteDialect } from "@drizzle-orm/sqlite";
//  `{ Drizzle, SQLiteDialect }`：这是解构赋值的用法，表示从`@drizzle-orm/sqlite`模块中导入`Drizzle`和`SQLiteDialect`这两个导出项。`"@drizzle-orm/sqlite"`：指定从`@drizzle-orm/sqlite`包中导入内容，这个包提供了与SQLite数据库交互的功能。
const drizzle = new Drizzle({
	// `new Drizzle({})`：通过`new`关键字创建`Drizzle`的一个新实例。Drizzle是用来配置和管理数据库连接的。
	dialect: new SQLiteDialect({
		//  `new SQLiteDialect({})`：创建一个`SQLiteDialect`的实例，它是Drizzle中定义SQLite特定行为的部分，如何与SQLite数据库进行交互。
		storage: "./data/mydatabase.sqlite", // 数据库文件路径
		//  `"./data/mydatabase.sqlite"`：表示数据库文件位于项目根目录下的`data`文件夹中，文件名为`mydatabase.sqlite`。
	}),
});

export default drizzle;
// 这段代码主要用于配置和初始化一个指向SQLite数据库的连接实例，通过Drizzle框架管理数据库的操作和交互。
