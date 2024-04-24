export const orders = [
	{ id: 1, Name: "Gas", assigned: 150 },
	{ id: 2, Name: " Electricity", assigned: 200 },
	{ id: 3, Name: "Garbage", assigned: 60 },
];
const types = {
	bills: true,
	needs: true,
	wants: true,
};
export async function createOrder(req, res) {
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
	if (typeof body.desc !== "string") {
		throw new Error("Desc need a string");
	}

	res.status(200).json({ success: true });
}
