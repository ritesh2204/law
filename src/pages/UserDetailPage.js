import React from "react";
import UserDetailBlock from "../components/UserDetailBlock";
import AddButton from "../components/AddButton";

const UserDetailPage = () => (
  <React.Fragment>
    <div className="mr-100">
      <AddButton name="User Details" path="/adduser" />
      <UserDetailBlock />
      <UserDetailBlock />
    </div>
  </React.Fragment>
);

export default UserDetailPage;
