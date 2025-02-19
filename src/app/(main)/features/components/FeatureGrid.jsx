'use client';

import { motion } from 'framer-motion';
import { Store, Settings, CreditCard, BarChart3, Cloud, Image, Smartphone, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  { title: "Προσωποποιημένο Subdomain", description: "Αποκτήστε το δικό σας μοναδικό κατάστημα στο yourshop.pocketshop.gr", icon: Store },
  { title: "Εύχρηστο Dashboard", description: "Διαχειριστείτε προϊόντα, παραγγελίες και πελάτες από ένα απλό περιβάλλον", icon: Settings },
  { title: "Ασφαλείς Πληρωμές", description: "Ενσωματωμένη διαχείριση πληρωμών μέσω Stripe με υποστήριξη για όλες τις κάρτες", icon: CreditCard },
  { title: "Αναλυτικά Στατιστικά", description: "Παρακολουθήστε τις πωλήσεις και την απόδοση του καταστήματός σας σε πραγματικό χρόνο", icon: BarChart3 },
  { title: "Cloud Hosting", description: "Φιλοξενία υψηλής διαθεσιμότητας με αυτόματα backups και SSL πιστοποιητικά", icon: Cloud },
  { title: "Διαχείριση Εικόνων", description: "Αυτόματη βελτιστοποίηση εικόνων και φιλοξενία μέσω Cloudinary", icon: Image },
  { title: "Mobile-First Σχεδιασμός", description: "Τα καταστήματα είναι πλήρως προσαρμοσμένα για όλες τις συσκευές", icon: Smartphone },
  { title: "Ασφάλεια", description: "Προστασία από επιθέσεις και κρυπτογράφηση δεδομένων σε όλα τα επίπεδα", icon: Shield }
];

const FeatureGrid = () => (
  <section className="py-20 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 100, damping: 12, delay: index * 0.1 }
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 400 } }}
          >
            <Card className="border bg-white hover:border-[#7886C7] transition-colors h-full">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-[#A9B5DF]/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-[#7886C7]" />
                </div>
                <CardTitle className="text-[#2D336B]">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#2D336B]/80">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureGrid;