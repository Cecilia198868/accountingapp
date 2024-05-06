export async function readOrderController(req, res) {
	const body = JSON.parse(req.body);
	if (!body.name) {
		throw new Error("The name needed");
	}
	if (typeof body.assigned !== "number") {
		throw new Error("Please input number in the assigned field.");
	}
	res.status(200).json(orders);
}
