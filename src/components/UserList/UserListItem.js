import React from "react";
import { Icon, Divider } from "semantic-ui-react";

const UserlistItem = () => {
  return (
    <React.Fragment>
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
};

export default UserlistItem;
