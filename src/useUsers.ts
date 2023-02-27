import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "./utils";
import { UserShape } from "./types";

type SelectFn<T extends any> = (data: UserShape) => T;
export function useUsers<T extends any>(select?: SelectFn<T>) {
  return useQuery<UserShape, unknown, T>(["users", "all"], fetchUsers, {
    ...(select && { select }),
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
