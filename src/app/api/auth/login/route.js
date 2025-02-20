import { db } from './../../../lib/index';
import { users } from './../../../lib/schema/schema';
import { eq } from 'drizzle-orm';
import { compare } from 'bcrypt';
import { cookies } from 'next/headers';
import { SignJWT } from 'jose';

const SECRET_KEY = process.env.JWT_SECRET_KEY;

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Find user by email
    const user = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (!user) {
      return Response.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Verify password
    const isValidPassword = await compare(password, user.hashedPassword);

    if (!isValidPassword) {
      return Response.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Create JWT token
    const token = await new SignJWT({
      id: user.id,
      email: user.email,
      role: user.role
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('24h')
      .sign(new TextEncoder().encode(SECRET_KEY));

    // Set cookie
    cookies().set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 // 24 hours
    });

    // Return user data (excluding sensitive information)
    return Response.json({
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    return Response.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}