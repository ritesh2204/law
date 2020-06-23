import React from "react";
import ClientViewBlock from "../components/ClientViewBlock";
import AddButton from "../components/AddButton";
import UserDetailComponent from "../components/UsersDetailComponent";

const ViewAdvocatePage = () => (
  <React.Fragment>
    <div className="mt-24">
      <AddButton name="Users" path="/addadvocate" />
      <UserDetailComponent />
    </div>
  </React.Fragment>
);

export default ViewAdvocatePage;
