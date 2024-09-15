import { v } from 'convex/values';

import { query } from '../_generated/server';

// Define the getUserById query
export const getUserById = query({
  args: { userId: v.optional(v.id('users')) }, // Make userId optional
  handler: async (ctx, args) => {
    // Check if userId is provided
    if (!args.userId) {
      return null; // or handle the case when userId is not provided
    }

    // Fetch the user document by ID
    const user = await ctx.db.get(args.userId);
    
    // If user not found, return null
    if (!user) {
      return null;
    }

    // Return user data (adjust the fields as per your requirements)
    return {
      name: user.name,
      username: user.username,
      email: user.email,
      interests: user.interests,
      summarizedData: user.summarizedData,
    };
  },
});