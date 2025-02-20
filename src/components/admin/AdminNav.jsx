// components/admin/AdminNav.jsx
"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { Button } from "@/components/ui/button";
import { Users, Settings, BarChart3, LogOut } from 'lucide-react';

const AdminNav = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/admin', label: 'Χρήστες', icon: Users },
    { href: '/admin/analytics', label: 'Στατιστικά', icon: BarChart3 },
    { href: '/admin/settings', label: 'Ρυθμίσεις', icon: Settings },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 border-b bg-white shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/admin" className="text-xl font-bold text-[#2D336B]">
              Πίνακας Διαχείρισης
            </Link>
            <div className="hidden md:flex items-center space-x-8 ml-10">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-2 ${
                      pathname === item.href
                        ? 'text-[#7886C7]'
                        : 'text-gray-600 hover:text-[#7886C7]'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          
          <Button
            onClick={() => signOut({ callbackUrl: '/' })}
            variant="ghost"
            className="flex items-center space-x-2 text-gray-600 hover:text-[#7886C7]"
          >
            <LogOut size={20} />
            <span>Αποσύνδεση</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default AdminNav;