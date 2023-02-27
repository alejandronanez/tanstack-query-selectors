import { UserShape } from "./types";

const wait = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchUsers(delayMs: number = 800): Promise<UserShape> {
  await wait(delayMs);
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

  return await response.json();
}
