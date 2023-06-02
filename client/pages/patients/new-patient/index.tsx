import CreatePatient from "components/UI/CreatePatient/CreatePatient";
import UserNavigation from "components/UserNavigation/UserNavigation";
import React from "react";

const index = () => {
  return (
    <UserNavigation>
      <CreatePatient />
    </UserNavigation>
  );
};

export default index;
