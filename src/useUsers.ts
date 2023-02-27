import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "./utils";
import { UserShape } from "./types";

type SelectFn<T extends any> = (data: UserShape) => T;
export function useUsers<T extends any>(select?: SelectFn<T>) {
  return useQuery<UserShape, unknown, T>(["users", "all"], fetchUsers, {
    ...(select && { select }),
    /**
     * `user` data won't change often, so it makes sense to set the stale time
     * to 1 minute. This will prevent race conditions between the first time we
     * call `useUsers` in `User.tsx` and when we call it through
     * `useName|useUserName|useFullAddress` in `{Name|UserName|FullAddress}.tsx`
     */
    staleTime: 60_000,
  });
}

/**
 * Selectors to get deeply nested data from `["users", "all"]`
 */
const selectNameSelectorFn: SelectFn<string> = (data) => data.name;
const selectUserNameSelectorFn: SelectFn<string> = (data) => data.username;
const selectFullAddressNameSelectorFn: SelectFn<string> = (data) =>
  `${data.address.city}, ${data.address.street} ${data.address.zipcode}`;

export const useName = () => useUsers(selectNameSelectorFn);
export const useUserName = () => useUsers(selectUserNameSelectorFn);
export const useFullAddress = () => useUsers(selectFullAddressNameSelectorFn);
