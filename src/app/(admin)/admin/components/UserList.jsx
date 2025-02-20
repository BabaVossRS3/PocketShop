import UserCard from "./UserCard";
import { useToast } from "./../../../../hooks/use-toast";

const UserList = ({ users, onUsersChange }) => {
  const { toast } = useToast();

  const handleUserAction = async (action, userId) => {
    try {
      // First, validate the action and userId
      if (!action || !userId) {
        throw new Error('Μη έγκυρη ενέργεια ή αναγνωριστικό χρήστη');
      }

      // Add proper headers and error handling
      const response = await fetch(`/api/admin/users/${userId}/${action}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add CSRF token if you have one
          // 'CSRF-Token': getCsrfToken(),
        },
        // Add credentials if needed
        credentials: 'include',
      });

      // Get the response data
      const data = await response.json();

      if (!response.ok) {
        // If the server returns an error message, use it
        throw new Error(data.error || 'Αποτυχία εκτέλεσης ενέργειας');
      }

      const messages = {
        approve: 'Ο χρήστης εγκρίθηκε επιτυχώς',
        deny: 'Η αίτηση του χρήστη απορρίφθηκε',
        requestPayment: 'Το αίτημα πληρωμής στάλθηκε στον χρήστη',
      };

      toast({
        title: 'Επιτυχία',
        description: messages[action] || data.message,
      });

      // Refresh the users list
      if (onUsersChange) {
        onUsersChange();
      }
    } catch (error) {
      console.error('Λεπτομέρειες σφάλματος ενέργειας:', error);
      
      toast({
        variant: "destructive",
        title: 'Σφάλμα',
        description: error.message || 'Αποτυχία εκτέλεσης ενέργειας. Παρακαλώ δοκιμάστε ξανά.',
      });
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.length > 0 ? (
        users.map(user => (
          <UserCard 
            key={user.id} 
            user={user} 
            onUserAction={handleUserAction}
          />
        ))
      ) : (
        <div className="text-center py-6 text-gray-500">
          Δεν βρέθηκαν χρήστες.
        </div>
      )}
    </div>
  );
};

export default UserList;
