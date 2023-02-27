import { useQuery } from "@tanstack/react-query";

export type User = {
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

export type Response = User[];

async function fetchUsers(): Promise<Response> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  return await response.json();
}

type SelectFn<T extends any> = (data: Response) => T;
export function useUsers<T extends any>(select?: SelectFn<T>) {
  return useQuery<Response, unknown, T>(["users", "all"], fetchUsers, {
    ...(select && { select }),
  });
}

/**
 * Selectors to get deeply nested data from `["users", "all"]`
 */
// export const firstName = () => {
//   const selectFn: SelectFn<string> = (data) =>
// };
