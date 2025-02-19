"use client"
import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const MainNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed w-full z-50 flex justify-center p-2">
      <nav className="w-[80%] backdrop-blur-md bg-[#A9B5DF]/40 border border-[#7886C7]/20 rounded-xl shadow-lg shadow-[#7886C7]/10">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-[#2D336B] text-2xl font-bold tracking-wider hover:text-[#7886C7] transition-colors">
                PocketShop
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/pricing" className="text-[#2D336B]/80 hover:text-[#7886C7] transition-colors">
                Τιμές
              </Link>
              <Link href="/features" className="text-[#2D336B]/80 hover:text-[#7886C7] transition-colors">
                Χαρακτηριστικά
              </Link>
              <Link href="/showcase" className="text-[#2D336B]/80 hover:text-[#7886C7] transition-colors">
                Παρουσίαση
              </Link>
              <Button variant="outline" className="border-[#7886C7] text-[#7886C7] hover:bg-[#7886C7] hover:text-[#FFF2F2]">
                Σύνδεση
              </Button>
              <Button className="bg-[#7886C7] text-[#FFF2F2] hover:bg-[#2D336B]">
                Ξεκινήστε
              </Button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-[#2D336B] hover:text-[#7886C7]">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="/pricing" className="block px-3 py-2 text-[#2D336B]/80 hover:text-[#7886C7]">
                  Τιμές
                </Link>
                <Link href="/features" className="block px-3 py-2 text-[#2D336B]/80 hover:text-[#7886C7]">
                  Χαρακτηριστικά
                </Link>
                <Link href="/showcase" className="block px-3 py-2 text-[#2D336B]/80 hover:text-[#7886C7]">
                  Παρουσίαση
                </Link>
                <div className="space-y-2 mt-4">
                  <Button variant="outline" className="w-full border-[#7886C7] text-[#7886C7] hover:bg-[#7886C7] hover:text-[#FFF2F2]">
                    Σύνδεση
                  </Button>
                  <Button className="w-full bg-[#7886C7] text-[#FFF2F2] hover:bg-[#2D336B]">
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