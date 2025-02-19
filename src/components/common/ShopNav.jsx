"use client"

import {Menu, ShoppingCart } from "lucide-react";
import React from "react";
import Link from 'next/link';


// ShopNav component for individual shops
const ShopNav = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
      <nav className="fixed w-full z-50 bg-[#242424] border-b border-[#16FF00] shadow-lg shadow-[#16FF00]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-[#16FF00] text-2xl font-bold tracking-wider hover:text-[#06D001] transition-colors">
                StoreName
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/products" className="text-[#F8F5E9] hover:text-[#16FF00] transition-colors">
                Products
              </Link>
              <Link href="/about" className="text-[#F8F5E9] hover:text-[#16FF00] transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-[#F8F5E9] hover:text-[#16FF00] transition-colors">
                Contact
              </Link>
              <button className="relative text-[#16FF00] hover:text-[#06D001]">
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-[#16FF00] text-[#242424] rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  0
                </span>
              </button>
            </div>
  
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-[#F8F5E9] hover:text-[#16FF00]">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
  
          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="/products" className="block px-3 py-2 text-[#F8F5E9] hover:text-[#16FF00]">
                  Products
                </Link>
                <Link href="/about" className="block px-3 py-2 text-[#F8F5E9] hover:text-[#16FF00]">
                  About
                </Link>
                <Link href="/contact" className="block px-3 py-2 text-[#F8F5E9] hover:text-[#16FF00]">
                  Contact
                </Link>
                <button className="w-full flex justify-between items-center px-3 py-2 text-[#16FF00]">
                  <span>Cart</span>
                  <div className="flex items-center">
                    <ShoppingCart size={20} />
                    <span className="ml-2 bg-[#16FF00] text-[#242424] rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      0
                    </span>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  };

  export default ShopNav;