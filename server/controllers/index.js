import { createOrderController } from "./create-order-controller";

export function useController(app) {
	app.use("/orders/create", createOrderController);
}
