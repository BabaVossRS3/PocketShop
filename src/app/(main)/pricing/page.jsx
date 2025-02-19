import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const pricingPlans = [
  {
    name: 'Βασικό',
    price: '50',
    description: 'Ιδανικό για μικρές επιχειρήσεις',
    features: [
      'Έως 15 προϊόντα',
      'Βασικά στατιστικά',
      'Υποστήριξη μέσω email',
      'Προσαρμοσμένο subdomain',
      'Βασική προσαρμογή καταστήματος',
      'Διαχείριση παραγγελιών',
      'Ειδοποιήσεις email'
    ],
    buttonText: 'Επιλογή Πακέτου',
    popular: false
  },
  {
    name: 'Premium',
    price: '100',
    description: 'Για αναπτυσσόμενες επιχειρήσεις',
    features: [
      'Έως 15 προϊόντα',
      'Προηγμένα στατιστικά',
      'Άμεση υποστήριξη',
      'Προσαρμοσμένο subdomain',
      'Πλήρης προσαρμογή καταστήματος',
      'Αυτοματοποιημένη διαχείριση παραγγελιών',
      'Προτεραιότητα στην υποστήριξη',
      'Παρακολούθηση αποθέματος',
      'Προηγμένες αναφορές'
    ],
    buttonText: 'Ξεκινήστε Τώρα',
    popular: true
  },
  {
    name: 'Business',
    price: '150',
    description: 'Για μεγάλες επιχειρήσεις',
    features: [
      'Έως 15 προϊόντα',
      'Premium στατιστικά',
      'Υποστήριξη 24/7',
      'Προσαρμοσμένο subdomain',
      'Πλήρης προσαρμογή καταστήματος',
      'Premium διαχείριση παραγγελιών',
      'VIP υποστήριξη',
      'Πρόσβαση σε API',
      'Προσαρμοσμένες ενσωματώσεις',
      'Αποκλειστικός διαχειριστής λογαριασμού'
    ],
    buttonText: 'Επικοινωνήστε Μαζί Μας',
    popular: false
  }
];

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-[#242424] py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#F8F5E9] mt-20 mb-10">
            Απλή & <span className="text-[#16FF00]">Ξεκάθαρη</span> Τιμολόγηση
          </h1>
          <p className="text-xl text-[#F8F5E9]">
            Επιλέξτε το ιδανικό πακέτο για την επιχείρησή σας
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.name}
              className={`relative flex flex-col bg-[#242424] ${
                plan.popular ? 'border-2 border-[#16FF00] shadow-lg' : 'border border-[#06D001]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-48 text-center">
                  <span className="bg-[#16FF00] text-[#242424] px-3 py-1 rounded-full text-sm font-medium">
                    Δημοφιλής Επιλογή
                  </span>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#F8F5E9]">{plan.name}</CardTitle>
                <CardDescription className="text-[#F8F5E9]/80">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <div className="mb-6 text-center">
                  <span className="text-4xl text-center font-bold text-[#16FF00]">{plan.price}€</span>
                  <span className="text-[#F8F5E9]/80 ml-2">/μήνα</span>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-[#16FF00] flex-shrink-0" />
                      <span className="text-[#F8F5E9]/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-[#16FF00] hover:bg-[#06D001] text-[#242424]' 
                      : 'bg-[#06D001] hover:bg-[#16FF00] text-[#242424]'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* FAQ or Additional Info */}
        <div className="text-center mt-16">
          <p className="text-[#F8F5E9]/80">
            Όλα τα πακέτα περιλαμβάνουν: ασφαλείς πληρωμές, προσαρμοσμένο domain και βασική υποστήριξη.
            <br />
            Χρειάζεστε βοήθεια; <span className="text-[#16FF00] hover:text-[#06D001] cursor-pointer">Επικοινωνήστε μαζί μας</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;