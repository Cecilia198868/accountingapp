import { updateOrders } from "../services/update-orders.js";
export function updateOrdersController(req, res) {
	const { type, title, amount, id } = req.body;
	// const { id } = req.params;
	// 使用 id 来获取用户信息
	if (!id) {
		throw new Error("id not found");
	}
	if (!type) {
		throw new Error("type not found");
	}
	if (!title) {
		throw new Error("title not found");
	}
	if (!amount) {
		throw new Error("amount not found");
	}
	updateOrders(id, {
		type,
		title,
		amount,
	});
	res.status(200).json({ success: true });
}
