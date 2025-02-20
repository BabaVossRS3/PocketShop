"use client";

import { useEffect, useState } from "react";
import { UserPlus, Store, Package } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import StatsCard from "./components/StatsCard";
import CreateUserDialog from "./components/CreateUserDialog";
import UserList from "./components/UserList";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeShops: 0,
    totalProducts: 0,
  });

  const generateRandomPassword = () => {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/admin/users");
      const data = await response.json();
      
      if (!response.ok) throw new Error(data.message);
      
      setUsers(data.users);
      // Update stats
      setStats({
        totalUsers: data.users.length,
        activeShops: data.users.filter(user => user.shop?.active).length,
        totalProducts: 0, // You might want to fetch this separately
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateUser = async (userData) => {
    try {
      const password = generateRandomPassword();
      
      const response = await fetch("/api/admin/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...userData,
          password,
        }),
      });

      const data = await response.json();
      
      if (!response.ok) throw new Error(data.message);

      // Show success message with credentials
      alert(`Ο χρήστης δημιουργήθηκε επιτυχώς!\nEmail: ${userData.email}\nΚωδικός: ${password}\n\nΦροντίστε να αποθηκεύσετε αυτά τα διαπιστευτήρια!`);
      
      // Refresh the user list
      fetchUsers();
      // Close the modal
      setIsCreateModalOpen(false);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (isLoading)
    return (
      <div className="p-6 flex items-center justify-center min-h-screen">
        <div className="text-lg text-gray-600">Φόρτωση...</div>
      </div>
    );

  if (error)
    return (
      <div className="p-6">
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    );

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard title="Συνολικοί Χρήστες" value={stats.totalUsers} icon={UserPlus} />
        <StatsCard title="Ενεργά Καταστήματα" value={stats.activeShops} icon={Store} />
        <StatsCard
          title="Συνολικά Προϊόντα"
          value={stats.totalProducts}
          icon={Package}
        />
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-[#2D336B]">Διαχείριση Χρηστών</h2>
        <CreateUserDialog
          isOpen={isCreateModalOpen}
          onOpenChange={setIsCreateModalOpen}
          onCreateUser={handleCreateUser}
        />
      </div>
      <UserList users={users} />
    </div>
  );
};

export default AdminDashboard;