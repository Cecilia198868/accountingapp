import express from "express";
import dotenv from "dotenv";

import { router } from "./controllers";

dotenv.config();

const app = express();

// middleware or router
app.use(express.json()); // 使express支持JSON格式的输入
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
