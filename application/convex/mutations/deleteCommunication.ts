import { v } from 'convex/values';

import { mutation } from '../_generated/server';

export const deleteCommunication = mutation({
  args: {
    communicationId: v.id("communications"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.communicationId);
  },
});