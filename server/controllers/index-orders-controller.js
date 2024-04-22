import { readOrders } from "./controllers/read-orders-controller.js";
import { createOrderController } from "./controllers/create-orders-controller.js";
import { editOrders } from "./controllers/edit-orders-controller.js";
import { deleteOrders } from "./controllers/delete-orders-controller.js";

app.post("/order/create", createOrderController);

app.get("/orders", readOrders);

app.patch("/order/:id/edit", editOrders);

app.delete("/order/:id/delete", deleteOrders);

export { default as createOrderController } from "./controllers/create-orders-controller.js";
export { default as readOrders } from "./controllers/read-orders-controller.js";
export { default as editOrders } from "./controllers/edit-orders-controller.js";
export { default as deleteOrders } from "./controllers/delete-orders-controller.js";
