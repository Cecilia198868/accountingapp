import { readOrder } from "./read-order-controller.js";
import { readOrders } from "./read-orders-controller.js";
import { createOrder } from "./create-orders-controller.js";
import { updateOrders } from "./update-orders-controller.js";
import { deleteOrders } from "./delete-orders-controller.js";
import { Router } from "express";
import { handleThrow } from "../utils/handle-throw.js";

export const router = Router();
router.post("/order/create", handleThrow(createOrder));

router.get("/order", handleThrow(readOrder));

router.get("/orders", handleThrow(readOrders));

router.patch("/order/:id/edit", handleThrow(updateOrders));

router.delete("/order/:id/delete", handleThrow(deleteOrders));
