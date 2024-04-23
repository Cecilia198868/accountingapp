export const orders = [];
const types = {
	play: true,
	home: true,
	work: true,
};
export async function createOrderController(req, res) {
	const body = JSON.parse(req.body);

	// title
	if (!body.title) {
		throw new Error("Need title");
	}
	// type
	if (!types[body.type]) {
		throw new Error("Type is not defined");
	}
	// desc
	if (typeof body.desc === "string") {
		throw new Error("Desc need a string");
	}
	res.status(200).json({ success: true });
}
