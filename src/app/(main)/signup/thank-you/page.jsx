// app/(main)/signup/thank-you/page.jsx
"use client"

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

const ThankYouPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#FFF2F2] pt-32 pb-20 px-4 flex items-center justify-center">
      <Card className="max-w-2xl w-full">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl text-[#2D336B] mb-2">
            Ευχαριστούμε για την εγγραφή σας!
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="space-y-4 text-[#2D336B]/80">
            <p>
              Η αίτησή σας για τη δημιουργία ηλεκτρονικού καταστήματος έχει ληφθεί επιτυχώς.
            </p>
            <p>
              Η ομάδα μας θα εξετάσει την αίτησή σας και θα επικοινωνήσει μαζί σας 
              στη διεύθυνση email που δηλώσατε εντός των επόμενων 24 ωρών.
            </p>
            <p>
              Μετά την έγκριση, θα λάβετε όλες τις απαραίτητες πληροφορίες για να 
              ξεκινήσετε με το νέο σας κατάστημα.
            </p>
          </div>

          <div className="pt-6 space-y-4">
            <Button 
              onClick={() => router.push('/')}
              className="bg-[#7886C7] hover:bg-[#2D336B] w-full md:w-auto"
            >
              Επιστροφή στην Αρχική
            </Button>
            
            <p className="text-sm text-[#2D336B]/60">
              Έχετε απορίες; <span className="text-[#7886C7] hover:text-[#2D336B] cursor-pointer">
                Επικοινωνήστε μαζί μας
              </span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThankYouPage;