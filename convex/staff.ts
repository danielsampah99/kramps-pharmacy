import { createAccount } from "@convex-dev/auth/server";
import { action, query } from "./_generated/server";
import { v } from "convex/values";

export const addStaff = action({
	args: {
		fullName: v.string(),
		password: v.string(),
		email: v.string(),
		phoneNumber: v.string(),
		isActive: v.boolean(),
	},
	handler: async (ctx, args) => {
		const account = await createAccount(ctx, {
			provider: "password",
			account: { id: args.email, secret: args.password },
			profile: {
				email: args.email,
				name: args.fullName,
				phone: args.phoneNumber,
			},
		});

		return account;
	},
});

export const listStaff = query({
	args: {},
	handler: async (ctx) => {
		const users = (await ctx.db.query("users").order("desc").collect()).map((user) => ({
			id: user._id,
			createdAt: user._creationTime,
			fullName: user.name,
			email: user.email,
			phone: user.phone,
		}));

		return users;
	},
});
