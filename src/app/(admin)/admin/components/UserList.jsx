import UserCard from "./UserCard";

// UserList Component
const UserList = ({ users }) => (
    <div className="grid gap-6">
      {users.length > 0 ? users.map(user => <UserCard key={user.id} user={user} />) : <div className="text-center py-6 text-gray-500">No users found.</div>}
    </div>
  );
export default UserList;  