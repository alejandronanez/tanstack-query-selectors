import { useUsers } from "./useUsers";

export function Users() {
  const usersQuery = useUsers();

  return <div>Users</div>;
}
