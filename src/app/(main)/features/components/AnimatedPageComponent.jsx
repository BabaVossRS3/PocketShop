"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Store, Settings, CreditCard, BarChart3, Cloud, Image, Smartphone, Shield, Users, ShoppingBag, Zap } from 'lucide-react';

// Features data
const features = [
  { title: "Προσωποποιημένο Subdomain", description: "Αποκτήστε το δικό σας μοναδικό κατάστημα στο yourshop.pocketshop.gr", icon: Store },
  { title: "Εύχρηστο Dashboard", description: "Διαχειριστείτε προϊόντα, παραγγελίες και πελάτες από ένα απλό περιβάλλον", icon: Settings },
  { title: "Ασφαλείς Πληρωμές", description: "Ενσωματωμένη διαχείριση πληρωμών μέσω Stripe με υποστήριξη για όλες τις κάρτες", icon: CreditCard },
  { title: "Αναλυτικά Στατιστικά", description: "Παρακολουθήστε τις πωλήσεις και την απόδοση του καταστήματός σας σε πραγματικό χρόνο", icon: BarChart3 },
  { title: "Mobile-First Σχεδιασμός", description: "Τα καταστήματα είναι πλήρως προσαρμοσμένα για όλες τις συσκευές", icon: Smartphone },
  { title: "Ασφάλεια", description: "Προστασία από επιθέσεις και κρυπτογράφηση δεδομένων σε όλα τα επίπεδα", icon: Shield }
];

// Steps data
const steps = [
  {
    title: "1. Εγγραφή",
    description: "Δημιουργήστε τον λογαριασμό σας και επιλέξτε το όνομα του καταστήματός σας",
    icon: Users
  },
  {
    title: "2. Προσθήκη Προϊόντων",
    description: "Ανεβάστε τα προϊόντα σας με εικόνες, περιγραφές και τιμές",
    icon: ShoppingBag
  },
  {
    title: "3. Έναρξη Πωλήσεων",
    description: "Το κατάστημά σας είναι έτοιμο να δεχτεί παραγγελίες",
    icon: Zap
  }
];

// Animation variants for different sections
const fadeUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const FeatureCard = ({ feature, index }) => (
  <motion.div
    variants={fadeUpVariants}
    className="h-full"
  >
    <div className="border border-[#1B4D3E] bg-[#2C3930] hover:border-[#16FF00] transition-colors h-full p-6 rounded-lg">
      <div className="h-12 w-12 rounded-lg bg-[#16FF00]/10 flex items-center justify-center mb-4">
        <feature.icon className="h-6 w-6 text-[#16FF00]" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
      <p className="text-[#F8F5E9]">{feature.description}</p>
    </div>
  </motion.div>
);

const AnimatedPage = () => {
  return (
    <div className="min-h-screen bg-[#242424]">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerVariants}
        className="h-[80vh] flex items-center justify-center px-6 border-b border-[#1B4D3E]"
      >
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <motion.h1 
            variants={fadeUpVariants}
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white"
          >
            Όλα τα <span className="text-[#16FF00]">Εργαλεία</span> που Χρειάζεστε
          </motion.h1>
          <motion.p 
            variants={fadeUpVariants}
            className="mx-auto max-w-[600px] text-[#F8F5E9] text-lg md:text-xl"
          >
            Ανακαλύψτε τα χαρακτηριστικά που κάνουν το PocketShop την ιδανική πλατφόρμα για το online κατάστημά σας
          </motion.p>
        </div>
      </motion.section>

      {/* Features Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerVariants}
        className="py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerVariants}
        className="py-20 px-6 border-t border-[#1B4D3E]"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeUpVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
              Πώς Λειτουργεί
            </h2>
            <p className="text-[#F8F5E9] text-lg">
              Ξεκινήστε το δικό σας online κατάστημα σε τρία απλά βήματα
            </p>
          </motion.div>

          <motion.div 
            variants={staggerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariants}
                className="text-center space-y-4"
              >
                <div className="h-16 w-16 rounded-full bg-[#16FF00]/10 flex items-center justify-center mx-auto">
                  <step.icon className="h-8 w-8 text-[#16FF00]" />
                </div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-[#F8F5E9]">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerVariants}
        className="py-20 px-6 border-t border-[#1B4D3E]"
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.h2 
            variants={fadeUpVariants}
            className="text-3xl font-bold tracking-tight text-white"
          >
            Έτοιμοι να Ξεκινήσετε;
          </motion.h2>
          <motion.p 
            variants={fadeUpVariants}
            className="text-[#F8F5E9] text-lg"
          >
            Δημιουργήστε το κατάστημά σας σήμερα και ξεκινήστε να πουλάτε online
          </motion.p>
          <motion.div 
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-6 py-3 text-lg bg-[#16FF00] text-[#242424] hover:bg-[#06D001] rounded-lg">
              Δημιουργία Καταστήματος
            </button>
            <button className="px-6 py-3 text-lg text-[#16FF00] border border-[#16FF00] hover:bg-[#16FF00] hover:text-[#242424] rounded-lg">
              Δείτε τις Τιμές
            </button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AnimatedPage;