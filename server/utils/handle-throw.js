export function handleThrow(fn) {
	return async (req, res, ...args) => {
		try {
			await Promise.resolve(fn(req, res, ...args));
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	};
}
// 整个 handleThrow 函数的目的是接收一个异步函数 fn，并返回一个新的函数，这个新的函数会尝试执行 fn 并自动处理可能抛出的错误。如果有错误发生，它会捕获这个错误，并向客户端返回一个包含错误信息的响应，状态码为500。这样的设计可以使得在实际编程中，开发者可以更专注于业务逻辑，而不需要在每个函数中单独处理错误。
