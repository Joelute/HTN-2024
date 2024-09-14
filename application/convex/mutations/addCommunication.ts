import { v } from 'convex/values';

import { mutation } from '../_generated/server';

export const addCommunication = mutation({
  args: {
    userId: v.id("users"),
    senderId: v.id("users"),
    content: v.string(),
  },
  handler: async (ctx, args) => {
    const timestamp = Date.now(); // Get the current timestamp
    await ctx.db.insert("communications", {
      userId: args.userId,
      messages: [
        {
          senderId: args.senderId,
          content: args.content,
          timestamp: timestamp,
        },
      ],
    });
  },
});