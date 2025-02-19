'use client';  // Add this at the top

import { motion } from 'framer-motion';

const HeroSection = () => (
  <motion.section className="py-20 px-6 border-b border-[#1B4D3E]">
    <div className="max-w-5xl mx-auto text-center space-y-6">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">
        Όλα τα <span className="text-[#16FF00]">Εργαλεία</span> που Χρειάζεστε
      </h1>
      <p className="mx-auto max-w-[600px] text-[#F8F5E9] text-lg">
        Ανακαλύψτε τα χαρακτηριστικά που κάνουν το PocketShop την ιδανική πλατφόρμα για το online κατάστημά σας
      </p>
    </div>
  </motion.section>
);

export default HeroSection;
