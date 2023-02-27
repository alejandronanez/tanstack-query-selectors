import { useFullAddress, useName, useUserName } from "./useUsers";

export function User() {
  return (
    <div>
      <h2>The user</h2>
      <Name />
      <UserName />
      <FullAddress />
    </div>
  );
}

function Name() {
  const name = useName();

  return <div>{name}</div>;
}

function UserName() {
  const userName = useUserName();

  return <div>{userName}</div>;
}

function FullAddress() {
  const fullAddress = useFullAddress();

  return <div>{fullAddress}</div>;
}
