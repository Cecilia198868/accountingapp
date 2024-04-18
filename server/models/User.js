import drizzle from "../db";

const { entity, field } = drizzle.orm;

export const User = entity("User", {
	id: field.number().primary().autoIncrement(),
	name: field.string(),
	email: field.string().unique(),
});
