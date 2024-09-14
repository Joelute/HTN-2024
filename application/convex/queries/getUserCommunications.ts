import { v } from 'convex/values';

import { query } from '../_generated/server';

export const getUserCommunications = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    // Fetch all communications where the user is a participant
    const communications = await ctx.db
      .query("communications")
      .filter((q) => q.includes(q.field("participants"), args.userId))
      .collect();

    // Format the messages for chat display
    const formattedCommunications = communications.map((communication) => {
      return {
        participants: communication.participants,
        messages: communication.messages.map((message) => ({
          senderId: message.senderId,
          content: message.content,
          timestamp: message.timestamp,
        })),
      };
    });

    return formattedCommunications;
  },
});