import { v } from 'convex/values';

import { query } from './_generated/server';

export const checkUsername = query({
  args: { username: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_username")
      .filter((q) => q.eq(q.field("username"), args.username))
      .first();

    return user !== null; // Returns true if the username exists, false otherwise
  },
});