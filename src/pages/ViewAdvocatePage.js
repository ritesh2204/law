import React from "react";
import ClientViewBlock from "../components/ClientViewBlock";
import AddButton from "../components/AddButton";
import UserDetailComponent from "../components/UsersDetailComponent";
import UserList from "../components/UserList/UserList";

const ViewAdvocatePage = () => (
  <React.Fragment>
    {/* <AddButton name="Users" path="/addadvocate" /> */}
    <UserList />
  </React.Fragment>
);

export default ViewAdvocatePage;
