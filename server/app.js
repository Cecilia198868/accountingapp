import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import someRoute from "./routes/someRoute"; // 修正了路径字符串
import { useController } from "./controllers";
import orderRouter from "./controllers"; // 从controllers目录导入router
dotenv.config();

const app = express();

app.use(express.json()); // 使express支持JSON格式的输入

useController(app);

app.use("/api/someRoute", someRoute);
app.use("/orders", orderRouter);

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log(err));

app.get("/", (req, res) => {
	res.send("Hello, your accounting app is running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
