// app/api/shop-requests/route.js
import { db } from './../../lib/index';
import { users, shops } from './../../lib/schema/schema';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';

export async function POST(request) {
  try {
    const { email, password, firstName, lastName, shopName, subdomain, description } = await request.json();

    // 1. Check if email already exists
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (existingUser.length > 0) {
      return Response.json(
        { message: 'Το email χρησιμοποιείται ήδη' },
        { status: 400 }
      );
    }

    // 2. Check if subdomain is available
    const existingSubdomain = await db
      .select()
      .from(shops)
      .where(eq(shops.subdomain, subdomain))
      .limit(1);

    if (existingSubdomain.length > 0) {
      return Response.json(
        { message: 'Το subdomain χρησιμοποιείται ήδη' },
        { status: 400 }
      );
    }

    // 3. Create the user
    const hashedPassword = await bcrypt.hash(password, 10);
    
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

    // 4. Create the shop request
    const [newShop] = await db
      .insert(shops)
      .values({
        ownerId: newUser.id,
        name: shopName,
        subdomain,
        description,
        active: false, // Shop starts as inactive until approved
        settings: {},
      })
      .returning();

    return Response.json({
      message: 'Η αίτηση υποβλήθηκε επιτυχώς',
      user: {
        id: newUser.id,
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName
      },
      shop: {
        id: newShop.id,
        name: newShop.name,
        subdomain: newShop.subdomain
      }
    });

  } catch (error) {
    console.error('Shop request error:', error);
    return Response.json(
      { message: error.message || 'Παρουσιάστηκε σφάλμα κατά την υποβολή της αίτησης' },
      { status: 500 }
    );
  }
}