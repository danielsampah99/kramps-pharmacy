import { defineTable } from "convex/server";
import { v } from "convex/values";

export const customersTable = defineTable({
	name: v.string(),
	phone: v.nullable(v.string()),
	address: v.nullable(v.string()),
	email: v.nullable(v.string()),
	contactName: v.nullable(v.string()),
	contactPhone: v.nullable(v.string()),
	contactEmail: v.nullable(v.string()),
	type: v.union(v.literal("individual"), v.literal("hospital"), v.literal("pharmacy")),
	blacklistedAt: v.nullable(v.string()),
	blacklistedBy: v.nullable(v.id("users")),
	blacklistedReason: v.nullable(v.string()),
	addedBy: v.id("users"),
	updatedAt: v.nullable(v.string()),
	updatedBy: v.nullable(v.id("users")),
	deletedAt: v.nullable(v.string()),
	deletedBy: v.nullable(v.id("users")),
}).index("by_blacklisted", ["blacklistedAt"]);
