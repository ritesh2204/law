import React from "react";
import { Icon, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";

const UserlistItem = () => {
  return (
    <React.Fragment>
      <div className="d-flex table_body_clients align-items-center ">
        <div className="flex-1 flex-container align-items-center">
          <div className="avatar_client mr-8 flex-container align-items-center justify-content-center">
            PK
          </div>
          <b>Pankaj Kumar</b>
        </div>
        <div className="flex-1">
          <b>pankajkumar@gmail.com</b>
        </div>
        <div className="flex-1">
          ******* <Icon name="eye slash outline" className="pointer" />
        </div>
        <div className="flex-1">
          <b>Admin</b>&nbsp;
        </div>
        <div className="action_icon_clients flex-1">
          <div>
            <Link to="/user_update">
              {" "}
              <Icon name="edit" className="mr-20" />
            </Link>
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
