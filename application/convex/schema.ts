import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    interests: v.array(v.string()),
    username: v.string(), // Unique user handle
    summarizedData: v.string(),
  })
    .index("by_email", ["email"])
    .index("by_username", ["username"]), // Index to facilitate unique check

  communications: defineTable({
    participants: v.array(v.id("users")), // Array of participant userIds
    messages: v.array(
      v.object({
        senderId: v.id("users"), // Store the sender's userId
        content: v.string(),
        timestamp: v.number(),
      })
    ),
  }),
});