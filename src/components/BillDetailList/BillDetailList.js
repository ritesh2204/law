import React from "react";
import { Link } from "react-router-dom";
import { Divider, Icon } from "semantic-ui-react";
import BillDetailListItem from "./BillDetailListItem";

const BillDetailList = () => {
  return (
    <React.Fragment>
      <div className="d-flex space-between align-items-center">
        <div>
          <h4 className="bill_title">Create Bill</h4>
        </div>
        <div className="bill_date_select">
          <Link to="/createbill">
            {" "}
            <b> Create</b>&nbsp; <Icon name="add" className="bill_icon_arrow" />
          </Link>
        </div>
      </div>
      <Divider />

      <BillDetailListItem />
    </React.Fragment>
  );
};

export default BillDetailList;
