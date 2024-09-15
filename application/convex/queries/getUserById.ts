import { v } from 'convex/values';

import { query } from '../_generated/server';

// Define the getUserById query
export const getUserById = query({
  args: { userId: v.id('users') }, // Expect an ID from the 'users' table
  handler: async (ctx, args) => {
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