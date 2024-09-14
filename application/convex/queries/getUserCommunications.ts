import { v } from 'convex/values';

import { query } from '../_generated/server';

export const getUserCommunications = query({
  args: {
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    const communications = await ctx.db
      .query("communications")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .collect();
    return communications;
  },
});