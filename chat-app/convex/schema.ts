import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),      // Clerk 的 user.id
    email: v.string(),
    username: v.string(),
    imageUrl:  v.string(),
  })
    .index("by_clerkId", ["clerkId"])
    .index("by_email", ["email"]),
  requests: defineTable({
    sender: v.id("users"),
    receiver: v.id("users"),
  })
    .index("by_receiver", ["receiver"])
    .index("by_receiver_sender", ["receiver", "sender"])
});