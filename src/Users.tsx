import { useUsers, type Response } from "./useUsers";
import { User } from "./User";

export function Users() {
  const usersQuery = useUsers<Response>();

  if (usersQuery.isLoading) {
    return <div>Loading users</div>;
  }

  if (!usersQuery.isSuccess) {
    return <div>Oops - failed to fetch</div>;
  }

  return (
    <ul>
      {usersQuery.data.map((user) => (
        <li key={user.id}>
          <User />
        </li>
      ))}
    </ul>
  );
}
