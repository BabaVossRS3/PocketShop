// src/app/(main)/auth/signup/page.jsx
import { SignUpForm } from "@/components/auth/signup-form"

export default function SignUpPage() {
  return (
    <div className="container flex h-screen w-full items-center justify-center">
      <SignUpForm />
    </div>
  )
}