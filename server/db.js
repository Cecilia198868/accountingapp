import { Drizzle, SQLiteDialect } from "@drizzle-orm/sqlite";

const drizzle = new Drizzle({
	dialect: new SQLiteDialect({
		storage: "./data/mydatabase.sqlite", // 数据库文件路径
	}),
});

export default drizzle;
