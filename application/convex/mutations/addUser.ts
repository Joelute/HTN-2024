import { v } from 'convex/values';

import { mutation } from '../_generated/server';

export const addUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    interests: v.array(v.string()),
    username: v.string(), // Unique user handle
    summarizedData: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if the username is already in use
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_username")
      .filter((q) => q.eq(q.field("username"), args.username))
      .first();

    if (existingUser) {
      throw new Error("Username already in use. Please choose another one.");
    }

    // Insert the new user
    const userId = await ctx.db.insert("users", {
      name: args.name,
      email: args.email,
      interests: args.interests,
      username: args.username,
      summarizedData: args.summarizedData,
    });
    return userId; // Return the ID of the newly created user
  },
});