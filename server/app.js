import express from "express";
import dotenv from "dotenv";
import { router } from "./controllers/index.js";

dotenv.config();

const app = express();

// middleware or router
app.use(express.json()); // 使express支持JSON格式的输入
app.use("/v1", router);
// app.use(express.static("public"));

const PORT = process.env.SERVER_PORT || 4000;
app.listen(PORT, () => {
	// TODO, zheli yao yige rizhi
	console.log(`Server is running on port ${PORT}`);
});

// app.use()：用于全局或特定路径的中间件注册。
// app.get()：处理 GET 请求，用于获取数据。
// app.post()：处理 POST 请求，用于创建资源或提交数据。
// app.patch()：处理 PATCH 请求，用于部分更新资源。
