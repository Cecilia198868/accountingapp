import express from "express";
import dotenv from "dotenv";
import { router } from "./controllers/index.js";
import cors from "cors";

dotenv.config();

const app = express();

// middleware or router
app.use(express.json()); // 使express支持JSON格式的输入
app.use("/v1", router);
app.use(
	cors({
		origin: "http://localhost:3000",
	}),
);
app.get("/v1", (req, res) => {
	res.send("hello, World!");
});
const PORT = process.env.SERVER_PORT || 4000;
app.listen(PORT, () => {
	// TODO, zheli yao yige rizhi
	console.log(`Server is running on port ${PORT}`);
});
