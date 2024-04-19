import nodemailer from "nodemailer";

// 创建邮件传输器
const transporter = nodemailer.createTransport({
	host: "your_smtp_server.com", // 你的SMTP服务器
	port: 587, // SMTP 端口，对于安全传输通常是 465，非安全传输通常是 587
	secure: false, // 对于端口465应为true，对于其他端口通常为false
	auth: {
		user: "your_email@example.com", // 你的邮箱账号
		pass: "your_email_password", // 你的邮箱密码
	},
});

/**
 * 发送订单确认邮件。
 *
 * @param {Object} order 订单对象。
 */
async function sendConfirmationEmail(order) {
	// 邮件内容
	const mailOptions = {
		from: "your_email@example.com", // 发件人地址
		to: order.email, // 收件人地址，应从订单数据中获取
		subject: "Order Confirmation", // 主题
		text: `Hello, your order with id ${order.id} has been successfully placed.`, // 纯文本内容
		html: `<p>Hello, your order with id ${order.id} has been successfully placed.</p>`, // HTML内容
	};

	try {
		// 发送邮件
		const info = await transporter.sendMail(mailOptions);
		console.log("Message sent: %s", info.messageId);
		return info;
	} catch (error) {
		console.error("Error sending confirmation email:", error);
		throw error;
	}
}

export { sendConfirmationEmail };
