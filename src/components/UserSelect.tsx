import { User } from '../types/user';

interface UserSelectProps {
  users: User[];
  selectedUser: string;
  onUserChange: (userId: string) => void;
}

export function UserSelect({ users, selectedUser, onUserChange }: UserSelectProps) {
  return (
    <div>
      <label htmlFor="user" className="block text-sm font-medium text-gray-700 mb-1">
        Usuario
      </label>
      <select
        id="user"
        value={selectedUser}
        onChange={(e) => onUserChange(e.target.value)}
        className="block w-40 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}