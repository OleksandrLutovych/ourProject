import { allUsersAPI } from "api/api";
import { useAppSelector } from "hooks/reduxHooks";
import React, { useState } from "react";
import { IUser } from "types/User";

const index = () => {
  const [allUsers, setAllUsers] = useState<IUser[]>();
  useState(() => {
    try {
      fetch(allUsersAPI)
        .then((response) => response.json())
        .then((data) => setAllUsers(data));
    } catch (error) {}
  });
  return (
    <div>
      {allUsers &&
        allUsers.map((user: IUser) => {
          return (
            <div className="">
              name: {user.name}
              last: {user.lastName}
              email: {user.email}
              password: {user.password}
            </div>
          );
        })}
    </div>
  );
};

export default index;
