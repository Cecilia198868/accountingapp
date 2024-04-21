import express from "express";
import dotenv from "dotenv";
import { readOrders } from "./controllers/read-orders-controller.js";
import { createOrderController } from "./controllers/create-orders-controller.js";
import { editOrders } from "./controllers/edit-orders-controller.js";
import { deleteOrders } from "./controllers/delete-orders-controller.js";

dotenv.config();

const app = express();

// middleware or router
app.use(express.json()); // 使express支持JSON格式的输入

app.use("/orders", createOrderController);
app.use("/orders", readOrders);
app.use("/orders", editOrders);
app.use("/orders", deleteOrders);

app.get("/orders", readOrders);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
