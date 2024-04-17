import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json()); // 使express支持JSON格式的输入

// 连接数据库
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log(err));

// 定义一个简单的路由
app.get("/", (req, res) => {
	res.send("Hello, your accounting app is running!");
});

// 监听端口
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
