import { useQuery } from "@tanstack/react-query";

const wait = async () => new Promise((resolve) => setTimeout(resolve, 500));

export type UserShape = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

async function fetchUsers(): Promise<UserShape> {
  await wait();
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

  return await response.json();
}

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
