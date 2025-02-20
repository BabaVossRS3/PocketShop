import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, CreditCard } from "lucide-react";

const UserDetailDialog = ({ user, isOpen, onOpenChange, onAction }) => {
  const handleAction = async (action) => {
    try {
      await onAction(action, user.id);
      onOpenChange(false);
    } catch (error) {
      console.error('Σφάλμα κατά την εκτέλεση της ενέργειας:', error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Λεπτομέρειες Χρήστη</span>
            <Badge 
              variant={user.shop?.active ? "success" : "destructive"}
              className={`${user.shop?.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
            >
              {user.shop?.active ? 'Ενεργός' : 'Ανενεργός'}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Προσωπικές Πληροφορίες */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Προσωπικές Πληροφορίες</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Ονοματεπώνυμο</p>
                <p className="font-medium">{user.firstName} {user.lastName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{user.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Τηλέφωνο</p>
                <p className="font-medium">{user.phoneNumber || 'Δεν παρέχεται'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Ημερομηνία Εγγραφής</p>
                <p className="font-medium">{new Date(user.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          {/* Πληροφορίες Καταστήματος */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Πληροφορίες Καταστήματος</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Όνομα Καταστήματος</p>
                <p className="font-medium">{user.shop?.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Διεύθυνση Ιστοσελίδας</p>
                <p className="font-medium">{user.shop?.subdomain}.pocketshop.gr</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-500">Περιγραφή</p>
                <p className="font-medium">{user.shop?.description || 'Δεν παρέχεται περιγραφή'}</p>
              </div>
            </div>
          </div>

          {/* Κατάσταση Συνδρομής */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Κατάσταση Συνδρομής</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Τύπος Πλάνου</p>
                <p className="font-medium">{user.subscription?.planType || 'Χωρίς συνδρομή'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Κατάσταση Πληρωμής</p>
                <p className="font-medium">{user.subscription?.status || 'Σε αναμονή'}</p>
              </div>
            </div>
          </div>

          {/* Κουμπιά Ενεργειών */}
          <div className="flex justify-end space-x-3 pt-4 border-t">
            {!user.shop?.active && (
              <>
                <Button
                  onClick={() => handleAction('approve')}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Check className="w-4 h-4 mr-2" />
                  Έγκριση
                </Button>
                <Button
                  onClick={() => handleAction('deny')}
                  variant="destructive"
                >
                  <X className="w-4 h-4 mr-2" />
                  Απόρριψη
                </Button>
              </>
            )}
            <Button
              onClick={() => handleAction('requestPayment')}
              variant="outline"
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Αίτημα Πληρωμής
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserDetailDialog;
