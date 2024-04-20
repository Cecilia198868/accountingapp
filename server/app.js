import express from "express";
import dotenv from "dotenv";
import controllers from "./controllers";

dotenv.config();

const app = express();

app.use(express.json()); // 使express支持JSON格式的输入

app.use(controllers);

app.get("/", (req, res) => {
	res.send("Hello, your accounting app is running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
