// app/api/admin/users/route.js
import { db } from './../../../lib/index';
import { users, shops } from './../../../lib/schema/schema';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';

export async function GET() {
  try {
    // Get all shop owners
    const allUsers = await db
      .select({
        id: users.id,
        email: users.email,
        firstName: users.firstName,
        lastName: users.lastName,
        createdAt: users.createdAt,
        shop: {
          name: shops.name,
          subdomain: shops.subdomain,
          active: shops.active
        }
      })
      .from(users)
      .leftJoin(shops, eq(users.id, shops.ownerId))
      .where(eq(users.role, 'shop_owner'));

    // Sanitize and format the response
    const sanitizedUsers = allUsers.map(user => ({
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      createdAt: user.createdAt,
      shop: user.shop.name ? user.shop : null // Only include shop if it exists
    }));

    return Response.json({ users: sanitizedUsers });

  } catch (error) {
    console.error('Fetch users error:', error);
    return Response.json(
      { message: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { email, password, firstName, lastName, shopName, subdomain } = await request.json();

    // Hash the password using bcryptjs
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user first
    const [newUser] = await db
      .insert(users)
      .values({
        email,
        hashedPassword,
        firstName,
        lastName,
        role: 'shop_owner',
      })
      .returning();

    // If user creation successful, create the shop
    if (newUser) {
      const [newShop] = await db
        .insert(shops)
        .values({
          ownerId: newUser.id,
          name: shopName,
          subdomain,
          active: true,
          settings: {},
        })
        .returning();

      // If both operations successful, return the combined result
      if (newShop) {
        return Response.json({
          user: {
            id: newUser.id,
            email: newUser.email,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            shop: newShop
          }
        });
      }
    }

    // If we get here, something went wrong but didn't throw an error
    throw new Error('Failed to create user or shop');

  } catch (error) {
    console.error('Create user error:', error);
    
    // If user was created but shop creation failed, attempt to clean up
    if (error.message.includes('shop')) {
      try {
        await db
          .delete(users)
          .where(eq(users.id, newUser.id))
          .execute();
      } catch (cleanupError) {
        console.error('Cleanup error:', cleanupError);
      }
    }

    return Response.json(
      { message: error.message || 'Failed to create user' },
      { status: 500 }
    );
  }
}