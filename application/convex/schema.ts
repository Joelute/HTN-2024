import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  users: defineTable({ // Representation of a user
    name: v.string(),
    email: v.string(),
    interests: v.array(v.string()),
    onlineHandle: v.string(),
    summarizedData: v.string(),
  }).index("by_email", ["email"]),

  communications: defineTable({
    userId: v.id("users"), // Who's inbox is this
    messages: v.array(
      v.object({
        senderId: v.id("users"), // Store the sender's userId
        content: v.string(),
        timestamp: v.number(),
      })
    ),
  }),
});