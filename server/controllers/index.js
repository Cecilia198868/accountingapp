import { createOrderController } from "./create-order-controller";
import express from "express";
import { listOrdersController } from "./list-orders-controller";

export function useController(app) {
	app.use("/orders/create", createOrderController);
}

// server/controllers/index.js

export const router = express.Router();

// 定义获取订单列表的路由
router.get("/orders", listOrdersController);

// 其他路由...
