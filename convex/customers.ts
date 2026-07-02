import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { Id } from "./_generated/dataModel";
import { getUserId, getUserInfo } from "./dosageForms";

const customerType = v.union(
	v.literal("individual"),
	v.literal("hospital"),
	v.literal("pharmacy"),
);

const mutateCustomerArgs = {
	name: v.string(),
	phone: v.nullable(v.string()),
	address: v.nullable(v.string()),
	email: v.nullable(v.string()),
	contactName: v.nullable(v.string()),
	contactPhone: v.nullable(v.string()),
	contactEmail: v.nullable(v.string()),
	type: customerType,
};


export const addCustomer = mutation({
	args: mutateCustomerArgs,
	handler: async (ctx, args) => {
		const {
			name,
			phone,
			address,
			email,
			contactName,
			contactPhone,
			contactEmail,
			type,
		} = args;
		const userId = await getUserId(ctx);

		return await ctx.db.insert("customers", {
			name,
			phone,
			address,
			email,
			contactName,
			contactPhone,
			contactEmail,
			type,
			blacklistedAt: null,
			blacklistedBy: null,
			blacklistedReason: null,
			addedBy: userId as Id<"users">,
			updatedAt: null,
			updatedBy: null,
			deletedAt: null,
			deletedBy: null,
		});
	},
});

export const updateCustomer = mutation({
	args: { ...mutateCustomerArgs, customerId: v.id("customers") },
	handler: async (ctx, args) => {
		const {
			customerId,
			name,
			phone,
			address,
			email,
			contactName,
			contactPhone,
			contactEmail,
			type,
		} = args;
		const userId = await getUserId(ctx);

		return await ctx.db.patch("customers", customerId, {
			name,
			phone,
			address,
			email,
			contactName,
			contactPhone,
			contactEmail,
			type,
			updatedAt: new Date().toISOString(),
			updatedBy: userId,
			deletedAt: null,
			deletedBy: null,
		});
	},
});

export const deleteCustomer = mutation({
	args: { id: v.id("customers") },
	handler: async (ctx, args) => {
		const deletedBy = await getUserId(ctx);
		await ctx.db.patch("customers", args.id, {
			deletedAt: new Date().toISOString(),
			deletedBy,
		});

		return args.id;
	},
});

export const listActiveCustomers = query({
	args: {},
	handler: async (ctx) => {
		const customers = await ctx.db
			.query("customers")
			.order("desc")
			.collect();

		const customersWithUsers = await Promise.all(
			customers.map(async (cu) => {
				return {
					...cu,
					addedBy: await getUserInfo(ctx, cu.addedBy),
					updatedBy: await getUserInfo(ctx, cu.updatedBy),
				};
			}),
		);

		return customersWithUsers;
	},
});

export const listBlacklistedCustomers = query({
	args: {},
	handler: async (ctx) => {
		const customerForms = await ctx.db
			.query("customers")
			// .withIndex("by_blacklisted", (q) => q.eq("blacklistedAt", null))
			.order("desc")
			.filter((q) => q.neq(q.field("blacklistedAt"), null))
			.collect();

		const customers = await Promise.all(
			customerForms.map(async (df) => {
				return {
					...df,
					addedBy: await getUserInfo(ctx, df.addedBy),
					updatedBy: await getUserInfo(ctx, df.updatedBy),
				};
			}),
		);

		return customers;
	},
});
