'use client';  // Add this at the top
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const CallToAction = () => (
  <motion.section className="py-20 px-6 border-t border-[#1B4D3E]">
    <div className="max-w-4xl mx-auto text-center space-y-6">
      <h2 className="text-3xl font-bold tracking-tight text-white">Έτοιμοι να Ξεκινήσετε;</h2>
      <p className="text-[#F8F5E9] text-lg">Δημιουργήστε το κατάστημά σας σήμερα και ξεκινήστε να πουλάτε online</p>
      <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
        <Button size="lg" className="text-lg bg-[#16FF00] text-[#242424] hover:bg-[#06D001]">Δημιουργία Καταστήματος</Button>
        <Button size="lg" variant="outline" className="text-lg text-[#16FF00] border-[#16FF00] hover:bg-[#16FF00] hover:text-[#242424]">Δείτε τις Τιμές</Button>
      </motion.div>
    </div>
  </motion.section>
);

export default CallToAction;
