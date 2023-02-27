import { useUsers, type Response } from "./useUsers";
import { User } from "./User";

export function Users() {
  const usersQuery = useUsers<Response>();

  if (usersQuery.isLoading) {
    return <div>Loading user</div>;
  }

  if (!usersQuery.isSuccess) {
    return <div>Oops - failed to fetch</div>;
  }

  return <User />;
}
