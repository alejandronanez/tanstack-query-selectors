import { UserShape } from "./types";

const wait = async () => new Promise((resolve) => setTimeout(resolve, 500));

export async function fetchUsers(): Promise<UserShape> {
  await wait();
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

  return await response.json();
}
