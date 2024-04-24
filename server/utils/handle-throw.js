export function handleThrow(fn) {
	return async (req, res, ...args) => {
		try {
			await Promise.resolve(fn(req, res, ...args));
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	};
}
