import sqlite3 from "sqlite3";

// 数据库配置
const DB_PATH = "./server/mydatabase.sqlite";

// 创建一个数据库实例
export const db = new sqlite3.Database(DB_PATH, (err) => {
	if (err) {
		console.error(err.message);
	} else {
		console.log("Connected to the mydatabase.sqlite database.");
	}
});
