import { Instagram, Mail, Twitter } from "lucide-react";
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
      <footer className="relative z-50 bg-[#D0DDD0] border-t border-[#AAB99A]/40 shadow-lg shadow-[#AAB99A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-[#727D73] text-lg font-bold">PocketShop</h3>
              <p className="text-[#242424] text-sm">
                Δημιουργήστε το ψηφιακό σας κατάστημα σε λίγα λεπτά. Απλό, ισχυρό και προσιτό.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-[#727D73] font-medium">Προϊόν</h4>
              <ul className="space-y-2">
                <li><Link href="/features" className="text-[#242424] hover:text-[#727D73] text-sm">Χαρακτηριστικά</Link></li>
                <li><Link href="/pricing" className="text-[#242424] hover:text-[#727D73] text-sm">Τιμές</Link></li>
                <li><Link href="/showcase" className="text-[#242424] hover:text-[#727D73] text-sm">Εκθέσεις</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-[#727D73] font-medium">Εταιρεία</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-[#242424] hover:text-[#727D73] text-sm">Σχετικά</Link></li>
                <li><Link href="/contact" className="text-[#242424] hover:text-[#727D73] text-sm">Επικοινωνία</Link></li>
                <li><Link href="/blog" className="text-[#242424] hover:text-[#727D73] text-sm">Blog</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-[#727D73] font-medium">Συνδεθείτε</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-[#242424] hover:text-[#727D73]">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-[#242424] hover:text-[#727D73]">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-[#242424] hover:text-[#727D73]">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-[#AAB99A]">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-[#242424] text-sm">
                © 2025 PocketShop. Όλα τα δικαιώματα διατηρούνται. Powered By iPMS.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy" className="text-[#242424] hover:text-[#727D73] text-sm">
                  Πολιτική Απορρήτου
                </Link>
                <Link href="/terms" className="text-[#242424] hover:text-[#727D73] text-sm">
                  Όροι Υπηρεσίας
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
