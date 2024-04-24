import { readOrder } from "./read-order-controller.js";
import { readOrders } from "./read-orders-controller.js";
import { createOrder } from "./create-orders-controller.js";
import { updateOrders } from "./update-orders-controller.js";
import { deleteOrders } from "./delete-orders-controller.js";
import { orders } from "./create-orders-controller.js";
import { Router } from "express";

export const router = Router();
router.post("/order/create", createOrder);

router.get("/orders", readOrder);

router.get("/orders", readOrders);
router.get("/orders", orders);

router.patch("/order/:id/edit", updateOrders);

router.delete("/order/:id/delete", deleteOrders);
