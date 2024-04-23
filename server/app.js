import express from "express";
import dotenv from "dotenv";

import { router } from "./controllers";

dotenv.config();

const app = express();

// middleware or router
app.use(express.json()); // 使express支持JSON格式的输入
app.use(router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
	// TODO, zheli yao yige rizhi
	console.log(`Server is running on port ${PORT}`);
});
