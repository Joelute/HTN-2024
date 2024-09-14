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