import { readOrders } from "./controllers/read-orders-controller.js";
import { createOrderController } from "./controllers/create-orders-controller.js";
import { editOrders } from "./controllers/edit-orders-controller.js";
import { deleteOrders } from "./controllers/delete-orders-controller.js";
import { Router } from "express";

export const router = Router();
router.post("/order/create", createOrderController);

router.get("/orders", readOrders);

router.patch("/order/:id/edit", editOrders);

router.delete("/order/:id/delete", deleteOrders);
