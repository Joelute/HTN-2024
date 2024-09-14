import { v } from 'convex/values';

import { mutation } from '../_generated/server';

export const addUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    interests: v.array(v.string()),
    onlineHandle: v.string(),
    summarizedData: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if the onlineHandle is already in use
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_onlineHandle")
      .filter((q) => q.eq(q.field("onlineHandle"), args.onlineHandle))
      .first();

    if (existingUser) {
      throw new Error("Online handle already in use. Please choose another one.");
    }

    // Insert the new user
    const userId = await ctx.db.insert("users", {
      name: args.name,
      email: args.email,
      interests: args.interests,
      onlineHandle: args.onlineHandle,
      summarizedData: args.summarizedData,
    });
    return userId; // Return the ID of the newly created user
  },
});