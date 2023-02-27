import { useUsers, type Response } from "./useUsers";
import { User } from "./User";
import { useQueryClient } from "@tanstack/react-query";

export function Users() {
  const usersQuery = useUsers<Response>();

  if (usersQuery.isLoading) {
    return <div>Loading user</div>;
  }

  if (!usersQuery.isSuccess) {
    return <div>Oops - failed to fetch</div>;
  }

  return (
    <>
      <User />
      <InvalidateUserData />
    </>
  );
}

function InvalidateUserData() {
  const queryClient = useQueryClient();

  return (
    <button
      onClick={() => {
        void queryClient.invalidateQueries({ queryKey: ["users", "all"] });
      }}
      type="button"
    >
      Invalidate data from the cache
    </button>
  );
}
