import { Instagram, Mail, Twitter } from "lucide-react";
import React from "react";
import Link from 'next/link';

// ShopFooter component for individual shops
const ShopFooter = () => {
    return (
      <footer className="bg-[#242424] border-t border-[#16FF00] shadow-lg shadow-[#16FF00]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-[#16FF00] text-lg font-bold">StoreName</h3>
              <p className="text-[#F8F5E9] text-sm">
                Quality products for our valued customers.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-[#16FF00] font-medium">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/products" className="text-[#F8F5E9] hover:text-[#16FF00] text-sm">Products</Link></li>
                <li><Link href="/about" className="text-[#F8F5E9] hover:text-[#16FF00] text-sm">About Us</Link></li>
                <li><Link href="/contact" className="text-[#F8F5E9] hover:text-[#16FF00] text-sm">Contact</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-[#16FF00] font-medium">Contact Us</h4>
              <ul className="space-y-2">
                <li className="text-[#F8F5E9] text-sm flex items-center">
                  <Mail size={16} className="mr-2" />
                  contact@storename.com
                </li>
              </ul>
              <div className="flex space-x-4">
                <a href="#" className="text-[#F8F5E9] hover:text-[#16FF00]">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-[#F8F5E9] hover:text-[#16FF00]">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-[#1B4D3E]">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-[#F8F5E9] text-sm">
                © 2024 StoreName. All rights reserved.
              </p>
              <p className="text-[#F8F5E9] text-sm mt-2 md:mt-0">
                Powered by <Link href="/" className="text-[#16FF00] hover:text-[#06D001]">PocketShop</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  };

export default ShopFooter;