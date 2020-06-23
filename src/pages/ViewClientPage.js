import React from "react";
import AddButton from "../components/AddButton";
import ClientViewBlock from "../components/ClientViewBlock";
import { Icon, Header, Divider } from "semantic-ui-react";

const UserDetailPage = () => (
  <React.Fragment>
    <h1 className="header_clients2">My Tutors</h1>
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
    <div className="d-flex table_body_clients align-items-center ">
      <div className="flex-1 flex-container align-items-center">
        <div className="avatar_client mr-8 flex-container align-items-center justify-content-center">
          MG
        </div>
        <b>Mario Gibbs</b>
      </div>
      <div className="flex-1">
        <b>Art</b>
      </div>
      <div className="flex-1">
        <b>14 silver Road</b>
      </div>
      <div className="action_icon_clients flex-1">
        <div>
          <Icon name="edit" className="mr-20" />
          <Icon name="user delete" />
        </div>{" "}
      </div>
    </div>
    <div className="table_margin_clients">
      <Divider style={{ color: " #F3F3F7" }} />
    </div>
    <div className="d-flex table_body_clients align-items-center ">
      <div className="flex-1 flex-container align-items-center">
        <div className="avatar_client mr-8 flex-container align-items-center justify-content-center">
          MG
        </div>
        <b>Mario Gibbs</b>
      </div>
      <div className="flex-1">
        <b>Art</b>
      </div>
      <div className="flex-1">
        <b>14 silver Road</b>
      </div>
      <div className="action_icon_clients flex-1">
        <div>
          <Icon name="edit" className="mr-20" />
          <Icon name="user delete" />
        </div>{" "}
      </div>
    </div>
    <div className="table_margin_clients">
      <Divider style={{ color: " #F3F3F7" }} />
    </div>
    <div className="d-flex table_body_clients align-items-center ">
      <div className="flex-1 flex-container align-items-center">
        <div className="avatar_client mr-8 flex-container align-items-center justify-content-center">
          MG
        </div>
        <b>Mario Gibbs</b>
      </div>
      <div className="flex-1">
        <b>Art</b>
      </div>
      <div className="flex-1">
        <b>14 silver Road</b>
      </div>
      <div className="action_icon_clients flex-1">
        <div>
          <Icon name="edit" className="mr-20" />
          <Icon name="user delete" />
        </div>{" "}
      </div>
    </div>
    <div className="table_margin_clients">
      <Divider style={{ color: " #F3F3F7" }} />
    </div>
    <div className="d-flex table_body_clients align-items-center ">
      <div className="flex-1 flex-container align-items-center">
        <div className="avatar_client mr-8 flex-container align-items-center justify-content-center">
          MG
        </div>
        <b>Mario Gibbs</b>
      </div>
      <div className="flex-1">
        <b>Art</b>
      </div>
      <div className="flex-1">
        <b>14 silver Road</b>
      </div>
      <div className="action_icon_clients flex-1">
        <div>
          <Icon name="edit" className="mr-20" />
          <Icon name="user delete" />
        </div>{" "}
      </div>
    </div>
    <div className="table_margin_clients">
      <Divider style={{ color: " #F3F3F7" }} />
    </div>
  </React.Fragment>
);

export default UserDetailPage;
