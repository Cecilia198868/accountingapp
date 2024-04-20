import { createOrderController } from "./create-order-controller";
import express from "express";
import { listOrdersController } from "./list-orders-controller";

// 创建router实例
const controllers = express.Router();

// 定义创建订单的路由
controllers.post("/order/create", createOrderController); // 通常创建资源的动作用POST请求

// 定义获取订单列表的路由
controllers.get("/orders", listOrdersController); // “/orders”将在app中定义，这里只需要“/”

// 导出router
export default controllers;
