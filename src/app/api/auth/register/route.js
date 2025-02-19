// src/app/api/auth/register/route.js
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { db } from "@/lib/db"
import { users } from "@/lib/schema"

export async function POST(req) {
  try {
    const { email, password, firstName, lastName } = await req.json()

    // Validate input
    if (!email || !password || !firstName || !lastName) {
      return new NextResponse("Missing required fields", { status: 400 })
    }

    // Check if user already exists
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email)
    })

    if (existingUser) {
      return new NextResponse("User already exists", { status: 400 })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user
    await db.insert(users).values({
      email,
      hashedPassword,
      firstName,
      lastName,
      role: 'shop_owner', // Default role
    })

    return new NextResponse("User created successfully", { status: 201 })
  } catch (error) {
    console.error('Registration error:', error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}