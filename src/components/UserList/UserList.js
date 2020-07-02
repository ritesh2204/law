import React from "react";
import UserlistItem from "./UserListItem";
import { Divider } from "semantic-ui-react";
import AddButton from "../AddButton/AddButton";

const UserList = () => {
  return (
    <React.Fragment>
      <AddButton path="/addadvocate" title="Organization" />
      <div className="d-flex table-header  table_header_clients table_margin_clients">
        <div className="flex-1">
          <b>Name</b>
        </div>
        <div className="flex-1">
          <b>Email</b>
        </div>

        <div className="flex-1">
          <b>Type</b>
        </div>
        <div className="flex-1">
          <b>Edit</b>
        </div>
      </div>
      <div className="table_margin_clients">
        <Divider style={{ color: " #F3F3F7" }} />
      </div>
      <UserlistItem />
      <UserlistItem />
      <UserlistItem />
      <UserlistItem />
    </React.Fragment>
  );
};

export default UserList;
