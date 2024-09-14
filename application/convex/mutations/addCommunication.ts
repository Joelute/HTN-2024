import { v } from 'convex/values';

import { mutation } from '../_generated/server';

export const addCommunication = mutation({
  args: {
    participants: v.array(v.id("users")), // Array of participant userIds
    senderId: v.id("users"), // UserId of the sender
    content: v.string(),
  },
  handler: async (ctx, args) => {
    const timestamp = Date.now(); // Get the current timestamp
    if (args.participants.length < 2) {
      throw new Error("A conversation requires at least two participants.");
    }

    await ctx.db.insert("communications", {
      participants: args.participants,
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