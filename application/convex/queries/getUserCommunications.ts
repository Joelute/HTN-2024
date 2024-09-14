import { v } from 'convex/values';

import { query } from '../_generated/server';

export const getUserCommunications = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    // Fetch all communications
    const communications = await ctx.db.query("communications").collect();

    // Manually filter communications where participants include userId
    const userCommunications = communications.filter((communication) =>
      communication.participants.includes(args.userId)
    );

    // Format the messages for chat display
    const formattedCommunications = userCommunications.map((communication) => {
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