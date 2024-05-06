export function updateOrdersController(req, res) {
	const { id, name, assigned } = JSON.parse(req.body);

	if (!id) {
		return "Id not found";
	}
	if (!name) {
		return "name not found";
	}
	if (!assigned) {
		return "assigned not found";
	}

	res.status(200).json(orders);
}
