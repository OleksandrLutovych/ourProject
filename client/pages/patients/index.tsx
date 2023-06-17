import UserNavigation from "components/UserNavigation/UserNavigation";
import React from "react";
import Patients from "components/Patients/Patients";

const index = () => {
  return (
    <div>
      <UserNavigation />
      <Patients />
    </div>
  );
};

export default index;
