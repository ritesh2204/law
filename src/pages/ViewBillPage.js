import React from "react";
import ViewBill from "../components/ViewBill";
import AddButton from "../components/AddButton";

const ViewBillPage = () => (
  <React.Fragment>
    <div className="mt-24">
      <AddButton name="Bill" path="/createbill" />
      <ViewBill />
    </div>
  </React.Fragment>
);

export default ViewBillPage;
