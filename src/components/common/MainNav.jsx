"use client"
import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const MainNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed w-full z-50 flex justify-center p-2">
      <nav className="w-[80%] backdrop-blur-md bg-[#D0DDD0]/80 border border-[#AAB99A]/20 rounded-xl shadow-lg shadow-[#AAB99A]/10">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-[#727D73] text-2xl font-bold tracking-wider hover:text-[#AAB99A] transition-colors">
                PocketShop
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/pricing" className="text-[#242424] hover:text-[#727D73] transition-colors">
                Τιμές
              </Link>
              <Link href="/features" className="text-[#242424] hover:text-[#727D73] transition-colors">
                Χαρακτηριστικά
              </Link>
              <Link href="/showcase" className="text-[#242424] hover:text-[#727D73] transition-colors">
                Παρουσίαση
              </Link>
              <Button variant="outline" className="border-[#727D73] bg-[#D0DDD0] text-[#727D73] hover:bg-[#727D73] hover:text-[#D0DDD0]">
                Σύνδεση
              </Button>
              <Button className="bg-[#727D73] text-[#D0DDD0] hover:bg-[#AAB99A]">
                Ξεκινήστε
              </Button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-[#242424] hover:text-[#727D73]">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="/pricing" className="block px-3 py-2 text-[#242424] hover:text-[#727D73]">
                  Τιμές
                </Link>
                <Link href="/features" className="block px-3 py-2 text-[#242424] hover:text-[#727D73]">
                  Χαρακτηριστικά
                </Link>
                <Link href="/showcase" className="block px-3 py-2 text-[#242424] hover:text-[#727D73]">
                  Παρουσίαση
                </Link>
                <div className="space-y-2 mt-4">
                  <Button variant="outline" className="w-full border-[#727D73] text-[#727D73] hover:bg-[#727D73] hover:text-[#D0DDD0]">
                    Σύνδεση
                  </Button>
                  <Button className="w-full bg-[#727D73] text-[#D0DDD0] hover:bg-[#AAB99A]">
                    Ξεκινήστε
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default MainNav;
