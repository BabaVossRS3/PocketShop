'use client';

import { motion } from 'framer-motion';
import { Users, ShoppingBag, Zap } from 'lucide-react';

const HowItWorks = () => (
  <motion.section className="py-20 px-6 border-t border-[#A9B5DF]">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-[#2D336B] mb-4">
          Πώς Λειτουργεί
        </h2>
        <p className="text-[#2D336B]/80 text-lg">
          Ξεκινήστε το δικό σας online κατάστημα σε τρία απλά βήματα
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
          className="text-center space-y-4" 
          whileHover={{ y: -10 }} 
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="h-16 w-16 rounded-full bg-[#A9B5DF]/10 flex items-center justify-center mx-auto">
            <Users className="h-8 w-8 text-[#7886C7]" />
          </div>
          <h3 className="text-xl font-semibold text-[#2D336B]">1. Εγγραφή</h3>
          <p className="text-[#2D336B]/80">
            Δημιουργήστε τον λογαριασμό σας και επιλέξτε το όνομα του καταστήματός σας
          </p>
        </motion.div>

        <motion.div 
          className="text-center space-y-4" 
          whileHover={{ y: -10 }} 
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="h-16 w-16 rounded-full bg-[#A9B5DF]/10 flex items-center justify-center mx-auto">
            <ShoppingBag className="h-8 w-8 text-[#7886C7]" />
          </div>
          <h3 className="text-xl font-semibold text-[#2D336B]">2. Προσθήκη Προϊόντων</h3>
          <p className="text-[#2D336B]/80">
            Ανεβάστε τα προϊόντα σας με εικόνες, περιγραφές και τιμές
          </p>
        </motion.div>

        <motion.div 
          className="text-center space-y-4" 
          whileHover={{ y: -10 }} 
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="h-16 w-16 rounded-full bg-[#A9B5DF]/10 flex items-center justify-center mx-auto">
            <Zap className="h-8 w-8 text-[#7886C7]" />
          </div>
          <h3 className="text-xl font-semibold text-[#2D336B]">3. Έναρξη Πωλήσεων</h3>
          <p className="text-[#2D336B]/80">
            Το κατάστημά σας είναι έτοιμο να δεχτεί παραγγελίες
          </p>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default HowItWorks;