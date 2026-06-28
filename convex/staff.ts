import { createAccount } from "@convex-dev/auth/server";
import { action, query } from "./_generated/server";

export const addStaff = action({
	args: {},
	handler: async (ctx) => {
		const account = await createAccount(ctx, {
			provider: "password",
			account: { id: "naa@gmail.com", secret: "12345678" },
			profile: {
				email: "naa@gmail.com",
				name: "Naa",
				phone: "+233244567890",
			},
		});

		return account;
	},
});

export const listStaff = query({
	args: {},
	handler: async (ctx) => {
		const users = (await ctx.db.query("users").order("desc").collect()).map(
			(user) => ({
				id: user._id,
				createdAt: user._creationTime,
				fullName: user.name,
				email: user.email,
				phone: user.phone,
			}),
		);

		return users;
	},
});
