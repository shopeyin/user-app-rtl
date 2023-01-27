import React from "react";

function UsersLeft({ users }) {
  const [remainingUsers, setRemainingUsers] = React.useState(users.length);

  React.useEffect(() => {
    let result = users.filter((user) => {
      return user.status === true;
    });

    setRemainingUsers(users.length - result.length);
  }, [users]);
  return <div>Number of users left {remainingUsers}</div>;
}

export default UsersLeft;
