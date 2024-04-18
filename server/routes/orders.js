import express from "express";

const ordersRouter = express.Router();

// 路由逻辑
ordersRouter.post("/", (req, res) => {
	// 处理创建订单的逻辑...
});

export default ordersRouter;
