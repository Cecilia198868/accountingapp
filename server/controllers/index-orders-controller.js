import { createOrderController } from "./create-orders-controller";
import { readOrders } from "./read-orders-controller";
import { editOrders } from "./edit-orders-controller";
import { deleteOrders } from "./delete-orders-controller";

app.post("/order/create", createOrderController);

app.get("/orders", readOrders);

app.patch("/order/:id/edit", editOrders);

app.delete("/order/:id/delete", deleteOrders);

export { default as createOrderController } from "./create-orders-controller.js";
export { default as readOrders } from "./read-orders-controller.js";
export { default as editOrders } from "./edit-orders-controller.js";
export { default as deleteOrders } from "./delete-orders-controller.js";
