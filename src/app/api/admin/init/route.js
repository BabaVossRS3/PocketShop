// app/api/admin/init/route.js
import { db } from './../../../lib/index';
import { users } from './../../../lib/schema/schema';
import { hash } from 'bcrypt';
import { eq } from 'drizzle-orm';

export async function POST(request) {
  try {
    // This should be a secure environment variable in production
    const ADMIN_SECRET = process.env.ADMIN_INIT_SECRET;
    
    const { email, password, secret } = await request.json();

    // Verify the secret key
    if (secret !== ADMIN_SECRET) {
      return Response.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Check if super admin already exists
    const existingAdmin = await db
      .select()
      .from(users)
      .where(eq(users.role, 'super_admin'))
      .limit(1);

    if (existingAdmin.length > 0) {
      return Response.json(
        { message: 'Super admin already exists' },
        { status: 400 }
      );
    }

    // Create super admin
    const hashedPassword = await hash(password, 10);
    
    const [newAdmin] = await db
      .insert(users)
      .values({
        email,
        hashedPassword,
        role: 'super_admin',
        firstName: 'Super',
        lastName: 'Admin'
      })
      .returning();

    return Response.json({
      message: 'Super admin created successfully',
      admin: {
        id: newAdmin.id,
        email: newAdmin.email,
        role: newAdmin.role
      }
    });

  } catch (error) {
    console.error('Create super admin error:', error);
    return Response.json(
      { message: error.message || 'Failed to create super admin' },
      { status: 500 }
    );
  }
}