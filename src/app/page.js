import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, ShoppingBag, Globe, CreditCard } from "lucide-react";
import ParticlesBackground from './../components/common/ParticlesBackground';
import LoadingAnimation from './../components/common/LoadingAnimation';

export default function Home() {
  
  return (
    <>
      {/* Particles container positioned absolutely */}
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-36 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
                Συνδεθείτε στον
                <span className="text-[#727D73] block">Ψηφιακό Κόσμο</span>
              </h1>
              <p className="mx-auto max-w-[600px] text-[#F0F0D7] text-lg sm:text-xl">
                Δημιουργήστε το online κατάστημα σας σε δύο απλά βήματα και συνδεθείτε με πελάτες από όλο τον κόσμο
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="text-lg bg-[#727D73] text-[#242424] hover:bg-[#AAB99A]">
                  Ξεκινήστε Τώρα
                </Button>
                <Button size="lg" variant="outline" className="text-lg bg-transparent text-[#727D73] border-[#727D73] hover:bg-[#727D73] hover:text-[#242424]">
                  Μάθετε Περισσότερα
                </Button>
              </div>
            </div>
          </div>
        </section>
          
        {/* Features Grid */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Όλα όσα Χρειάζεστε για Online Επιτυχία
              </h2>
              <p className="text-[#F0F0D7] text-lg">
                Ισχυρά χαρακτηριστικά για να αναπτύξετε την επιχείρησή σας
              </p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="relative w-full flex flex-col items-center overflow-hidden border border-[#1B4D3E] bg-[#242424]">
                <CardHeader>
                  <div className="h-12 w-full rounded-lg bg-[#727D73]/10 flex items-center justify-center mb-4">
                    <Store className="h-6 w-6 text-[#727D73]" />
                  </div>
                  <CardTitle className="text-white">Προσαρμοσμένο Κατάστημα</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#F0F0D7] text-center">
                    Αποκτήστε το δικό σας branded online κατάστημα με μοναδικό subdomain
                  </p>
                </CardContent>
              </Card>
  
              <Card className="relative overflow-hidden border border-[#1B4D3E] bg-[#242424]">
                <CardHeader>
                  <div className="h-12 w-[full] rounded-lg bg-[#727D73]/10 flex items-center justify-center mb-4">
                    <ShoppingBag className="h-6 w-6 text-[#727D73]" />
                  </div>
                  <CardTitle className="text-white text-center">Εύκολη Διαχείριση</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#F0F0D7] text-center">
                    Διαισθητικός πίνακας ελέγχου για διαχείριση προϊόντων, παραγγελιών και αποθέματος
                  </p>
                </CardContent>
              </Card>
  
              <Card className="relative overflow-hidden border border-[#1B4D3E] bg-[#242424]">
                <CardHeader>
                  <div className="h-12 w-full rounded-lg bg-[#727D73]/10 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-[#727D73]" />
                  </div>
                  <CardTitle className="text-white text-center">Άμεση Εγκατάσταση</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#F0F0D7] text-center">
                    Ξεκινήστε το κατάστημά σας σε λίγα λεπτά με τον οδηγό εγκατάστασης
                  </p>
                </CardContent>
              </Card>
  
              <Card className="relative overflow-hidden border border-[#1B4D3E] bg-[#242424]">
                <CardHeader>
                  <div className="h-12 w-full rounded-lg bg-[#727D73]/10 flex items-center justify-center mb-4">
                    <CreditCard className="h-6 w-6 text-[#727D73]" />
                  </div>
                  <CardTitle className="text-white text-center">Ασφαλείς Πληρωμές</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#F0F0D7] text-center">
                    Δεχτείτε πληρωμές με ασφάλεια μέσω του ενσωματωμένου Stripe checkout
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Έτοιμοι να Ξεκινήσετε την Online Επιχείρησή σας;
            </h2>
            <p className="text-[#F0F0D7] text-lg">
              Γίνετε μέλος μαζί με χιλιάδες επιτυχημένους πωλητές στην πλατφόρμα μας
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg bg-[#727D73] text-[#242424] hover:bg-[#AAB99A]">
                Δημιουργία Καταστήματος
              </Button>
              <Button size="lg" variant="outline" className="text-lg text-[#727D73] border-[#727D73] bg-transparent hover:bg-[#727D73] hover:text-[#242424]">
                Δείτε τις Τιμές
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
