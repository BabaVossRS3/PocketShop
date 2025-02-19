'use client';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const CallToAction = () => (
  <motion.section className="py-20 px-6 border-t border-[#A9B5DF]">
    <div className="max-w-4xl mx-auto text-center space-y-6">
      <h2 className="text-3xl font-bold tracking-tight text-[#2D336B]">
        Έτοιμοι να Ξεκινήσετε;
      </h2>
      <p className="text-[#2D336B]/80 text-lg">
        Δημιουργήστε το κατάστημά σας σήμερα και ξεκινήστε να πουλάτε online
      </p>
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 justify-center" 
        whileHover={{ scale: 1.05 }} 
        transition={{ type: "spring", stiffness: 400 }}
      >
        <Button 
          size="lg" 
          className="text-lg bg-[#7886C7] text-[#FFF2F2] hover:bg-[#2D336B]"
        >
          Δημιουργία Καταστήματος
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="text-lg text-[#7886C7] border-[#7886C7] hover:bg-[#7886C7] hover:text-[#FFF2F2]"
        >
          Δείτε τις Τιμές
        </Button>
      </motion.div>
    </div>
  </motion.section>
);

export default CallToAction;