import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UserDetailDialog from './UserDetailDialog';

const UserCard = ({ user, onUserAction }) => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleAction = async (action, userId) => {
    try {
      await onUserAction(action, userId);
    } catch (error) {
      console.error('Error in user action:', error);
    }
  };

  return (
    <>
      <Card 
        className="cursor-pointer transition-all hover:shadow-md"
        onClick={() => setIsDetailOpen(true)}
      >
        <CardHeader>
          <CardTitle className="flex justify-between">
            <span>{user.firstName} {user.lastName}</span>
            <span className={`text-sm px-2 py-1 rounded ${
              user.shop?.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {user.shop?.active ? 'Active' : 'Inactive'}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-500">Email:</span>
              <span>{user.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Κατάστημα:</span>
              <span>{user.shop?.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Subdomain:</span>
              <span>{user.shop?.subdomain}.pocketshop.gr</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Δημιουργήθηκε:</span>
              <span>{new Date(user.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <UserDetailDialog
        user={user}
        isOpen={isDetailOpen}
        onOpenChange={setIsDetailOpen}
        onAction={handleAction}
      />
    </>
  );
};

export default UserCard;