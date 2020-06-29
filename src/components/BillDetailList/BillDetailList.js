import React from "react";
import BillDetailListItem from "./BillDetailListItem";
import AddButton from "../AddButton/AddButton";

const BillDetailList = () => {
  return (
    <React.Fragment>
      <AddButton path="/createbill" title="Create Bill" />

      <BillDetailListItem />
    </React.Fragment>
  );
};

export default BillDetailList;
