// 这行代码导入了 Express 库，这是一个用于 Node.js 的网站服务器框架。它简化了使用 Node.js 构建服务器应用程序的过程。
import express from "express";
// 导入 Mongoose，这是一个 MongoDB 对象建模工具，旨在在异步环境中工作。Mongoose 提供了一个基于模式的解决方案，用于建模您的应用程序数据。
import mongoose from "mongoose";
// 导入 dotenv 库，它从 .env 文件中加载环境变量到 process.env。这有助于安全地管理私有设置（如数据库密码）。
import dotenv from "dotenv";
// 从其他文件（./routes/orders.js）导入了 ordersRouter 模块。通常，此模块包含与订单相关的特定路由（URL路径），例如创建或获取订单。
import ordersRouter from "./routes/orders.js";
import someRoute from "./routes/someRoute"; // 修正了路径字符串
// 如果 db.js 使用 mongoose，就不需要再次导入 mongoose 和单独连接 MongoDB
// import db from "./db"
// 激活 dotenv 库的配置，这将读取 .env 文件的内容并将其合并到环境变量（process.env）中。
dotenv.config();
// 初始化一个新的 Express 应用程序。这个 app 对象被用来配置服务器，设置路由、中间件等。
const app = express();
// 这行代码设置了一个中间件，使 Express 能够解析 JSON 格式的请求体。这是处理 JSON 数据（如从客户端接收到的数据）的标准方法。
app.use(express.json()); // 使express支持JSON格式的输入
// 这行代码将 /orders 路径与 ordersRouter 路由处理程序相关联。这意味着任何以 /orders 开头的 URL 都将由 ordersRouter 中定义的路由来处理。
// 使用你的订单路由器，并指定路径前缀
app.use("/orders", ordersRouter);
// 路由
app.use("/api/someRoute", someRoute);

// 如果 db.js 中包含了连接数据库的逻辑，这里就不需要再次连接
// 你应该只保留下面的 db.connect 或者 mongoose.connect 中的一个
// db.connect();

// 连接数据库
// 这段代码尝试连接到由环境变量 MONGODB_URI 指定的 MongoDB 数据库。连接成功时会输出“MongoDB connected”，失败时会捕获并打印错误。
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log(err));

// 定义一个简单的路由
// 定义了一个简单的路由处理程序，当用户访问网站根路径（即 /）时，服务器将响应一条消息：“Hello, your accounting app is running!”。
app.get("/", (req, res) => {
	res.send("Hello, your accounting app is running!");
});

// 监听端口
// 这段代码设置服务器监听的端口，使用环境变量 PORT 或默认值 3000。然后启动服务器并在控制台打印出正在监听的端口号，表明服务器已经启动。
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
