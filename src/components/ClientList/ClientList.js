import React from "react";
import ClientListItem from "./ClientListItem";
import { Divider, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ClientList = () => {
  return (
    <React.Fragment>
      <div className="d-flex space-between align-items-center">
        <div>
          <h4 className="bill_title">Client details</h4>
        </div>
        <div className="bill_date_select">
          <Link to="/addclients">
            {" "}
            <b> Add</b> &nbsp; <Icon name="add" className="bill_icon_arrow" />
          </Link>
        </div>
      </div>
      <Divider />

      <ClientListItem />
    </React.Fragment>
  );
};

export default ClientList;
