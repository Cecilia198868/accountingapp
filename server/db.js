import sqlite3 from "sqlite3";
import dotenv from "dotenv";

dotenv.config();

export const db = new sqlite3.Database(
	process.env.DATABASE_STORAGE_PATH,
	sqlite3.OPEN_READWRITE,
	(err) => {
		if (err) {
			console.error(err.message);
		}
		console.log("Connected to the SQLite database.");
	},
);
