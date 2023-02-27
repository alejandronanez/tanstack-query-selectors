import { UserShape } from "./types";

const wait = async () => new Promise((resolve) => setTimeout(resolve, 800));

export async function fetchUsers(): Promise<UserShape> {
  await wait();
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await response.json();
  const r = Math.random();
  console.log(r);

  return {
    ...data,
    username: r > 0.5 ? data.username.toUpperCase() : "random name",
  };
}
