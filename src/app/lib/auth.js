// src/lib/auth.js
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { db } from './index'
import { users } from './schema/schema'
import { eq } from 'drizzle-orm'
import bcrypt from 'bcryptjs'

export const authOptions = {
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role
        session.user.id = token.id
      }
      return session
    },
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Please enter an email and password')
        }

        const user = await db.select()
          .from(users)
          .where(eq(users.email, credentials.email))
          .then(res => res[0])

        if (!user || !user.hashedPassword) {
          throw new Error('No user found')
        }

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        )

        if (!passwordMatch) {
          throw new Error('Incorrect password')
        }

        return {
          id: user.id,
          email: user.email,
          role: user.role,
          name: `${user.firstName} ${user.lastName}`.trim(),
        }
      }
    })
  ],
}