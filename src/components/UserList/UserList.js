import React from "react";
import UserlistItem from "./UserListItem";
import { Divider, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const UserList = () => {
  return (
    <React.Fragment>
      <div className="d-flex space-between align-items-center">
        <div>
          <h1 className="header_clients2">My Tutors</h1>
        </div>
        <div className="bill_date_select">
          <Link to="/addadvocate">
            {" "}
            <b> Add</b> &nbsp; <Icon name="add" className="bill_icon_arrow" />
          </Link>
        </div>
      </div>
      <Divider />
      <div className="d-flex table-header  table_header_clients table_margin_clients">
        <div className="flex-1">
          <b>Tutor name</b>
        </div>
        <div className="flex-1">
          <b>Subjects</b>
        </div>
        <div className="flex-1">
          <b>Locations</b>
        </div>
        <div className="flex-1">
          <b>Actions</b>
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
