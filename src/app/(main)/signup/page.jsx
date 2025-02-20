// app/(main)/signup/page.jsx
"use client";
import SignupForm from "./components/SignupForm";

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-[#FFF2F2] flex items-center justify-center px-4">
      <div className="w-full max-w-2xl"> {/* Centers the form and limits width */}
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
