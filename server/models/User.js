import drizzle from "../db";
import bcrypt from "bcryptjs";
// bcryptjs 是一个用于Node.js的库，它实现了bcrypt哈希算法。在密码存储的上下文中，哈希是一种单向转换技术，能将任何数据转换成固定长度的字符串。bcrypt特别适合用于安全存储密码，因为它是慢速的哈希函数，这使得即使是拥有强大计算能力的攻击者也难以通过暴力破解来找出原始密码。

const { entity, field } = drizzle.orm;

export const User = entity("User", {
	id: field.number().primary().autoIncrement(),
	name: field.string().required(),
	email: field.string().unique(),
	password: field
		.string()
		.required()
		.transform((value) => bcrypt.hashSync(value)),
	phone: field.string().unique(),
	createdAt: field.date().default(() => new Date()),
	updatedAt: field
		.date()
		.default(() => new Date())
		.onUpdate(() => new Date()),
	isActive: field.boolean().default(true),
	preferredCurrency: field.string().default("USD"),
	role: field.string().default("user"),
});
