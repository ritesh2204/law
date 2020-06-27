import React from "react";
import { Link } from "react-router-dom";
import { Divider, Icon } from "semantic-ui-react";

const AddButton = ({ path, title }) => {
  return (
    <React.Fragment>
      <div className="d-flex space-between align-items-center">
        <div>
          <h1 className="header_clients2">{title}</h1>
        </div>
        <div className="bill_date_select">
          <Link to={path}>
            {" "}
            <b> Add</b> &nbsp; <Icon name="add" className="bill_icon_arrow" />
          </Link>
        </div>
      </div>
      <Divider />
    </React.Fragment>
  );
};

export default AddButton;
