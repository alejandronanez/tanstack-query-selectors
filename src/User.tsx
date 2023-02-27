import { useFullAddress, useName, useUserName } from "./useUsers";

export function User() {
  return (
    <div>
      <h2>The user</h2>
      <Name />
      <UserName />
      <FullAddress />
      <hr />
    </div>
  );
}

function Name() {
  const { data, isFetching } = useName();

  if (isFetching) {
    return (
      <div>getting fresh data - must show `loading` state for `name`...</div>
    );
  }

  return <div>{data}</div>;
}

function UserName() {
  const { data, isLoading } = useUserName();

  if (isLoading) {
    return <div>loading - shown only on first render</div>;
  }

  return <div>{data}</div>;
}

function FullAddress() {
  const { data } = useFullAddress();

  return <div>{data}</div>;
}
