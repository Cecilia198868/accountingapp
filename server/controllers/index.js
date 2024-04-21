import express from "express";
import { createOrderController } from "./create-order-controller";
import { listOrders } from "./list-orders-controller";
import { editOrder } from "./edit-order";
import { deleteOrder } from "./delete-order";

const app = express();

app.use(express.json());

app.post("/order/create", (req, res) => {
	try {
		const newOrder = createOrderController(req.body);
		res.status(200).json(newOrder);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

app.get("/orders", listOrders);

app.patch("/order/:id/edit", (req, res) => {
	try {
		const updatedOrder = editOrder(
			Number.parseInt(req.params.id, 10),
			req.body,
		);
		res.json(updatedOrder);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
});

app.delete("/order/:id/delete", (req, res) => {
	try {
		deleteOrder(Number.parseInt(req.params.id, 10));
		res.status(204).send();
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send("Something broke!");
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log("Server running on port ${PORT}");
});

export default app;
