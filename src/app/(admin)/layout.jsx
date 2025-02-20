// app/(admin)/layout.jsx
"use client"
import AdminNav from '@/components/admin/AdminNav';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminLayout({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Redirect if not authenticated or not super_admin
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    } else if (session?.user?.role !== 'super_admin') {
      router.push('/');
    }
  }, [session, status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session || session.user.role !== 'super_admin') {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNav/>
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
}