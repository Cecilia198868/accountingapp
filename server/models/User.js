import drizzle from "../db";
// entity实体;drizzle细雨
const { entity, field } = drizzle.orm;

export const User = entity("User", {
	id: field.number().primary().autoIncrement(),
	name: field.string(),
	email: field.string().unique(),
});
