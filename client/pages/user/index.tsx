import { allUsersAPI } from "api/api";
import { Header } from "components";
import { useAppSelector } from "hooks/reduxHooks";
import React, { useEffect, useState } from "react";
import { IUser } from "types/User";

const index = () => {
  const [allUsers, setAllUsers] = useState<IUser[]>();
  useEffect(() => {
    fetch('https://localhost:5001/Api/GetAllUsers')
      .then((response) => response.json())
      .then((data) => setAllUsers(data));
  }, []);
  console.log(allUsers)
  return (
    <div>
      <Header/>
      {allUsers &&
        allUsers.map((user: IUser) => {
          return (
            <div className="" key={1}>
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
