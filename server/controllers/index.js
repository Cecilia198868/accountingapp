import { readOrder } from "./read-order-controller.js";
import { readOrders } from "./read-orders-controller.js";
import { createOrder } from "./create-orders-controller.js";
import { updateOrders } from "./update-orders-controller.js";
import { deleteOrders } from "./delete-orders-controller.js";
import { Router } from "express";
import { handleThrow } from "../utils/handle-throw.js";

export const router = Router();
router.post("/order/create", handleThrow(createOrder));
// POST 请求通常用于提交数据到服务器，如用户输入。它可以创建新的资源，或者在服务器上触发某种操作，这些操作可能会改变服务器的状态或者数据库中的数据。
router.get("/order", handleThrow(readOrder));
// GET 请求用于请求读取服务器上的数据。它应该只用于获取数据，而不应当改变服务器的状态。例如，从数据库中检索信息。

router.get("/orders", handleThrow(readOrders));

router.patch("/order/:id/update", handleThrow(updateOrders));
// PATCH 请求用于对资源进行部分修改。与 PUT 请求相比，PATCH 专门用于资源的部分更新，而 PUT 则通常用于替换一个已存在的资源。

router.delete("/order/:id/delete", handleThrow(deleteOrders));
// DELETE 请求用于删除指定的资源。这个方法直接请求服务器删除资源，这通常会在数据库中删除一条记录。
