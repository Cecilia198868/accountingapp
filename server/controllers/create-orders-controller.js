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
	const body = req.body;
	console.log(body);
	if (!body.title) {
		// title
		throw new Error("Need title");
	}
	if (!types[body.type]) {
		// type
		throw new Error("Type is not defined");
	}
	if (typeof body.desc !== "string") {
		// desc
		throw new Error("Desc need a string");
	}
	console.log("running create order");
	res.status(200).json({ success: true });
}
