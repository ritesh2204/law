import React from "react";
import AddButton from "../components/AddButton/AddButton";

import CaseDetailList from "../components/CaseDetailList/CaseDetailList";

const ViewCasePages = () => (
  <React.Fragment>
    {/* <div className="mt-24"> */}
    <AddButton path="/addcase" title="Case Details" />

    {/* <AddButton name="Cases" path="/addcase" /> */}
    <CaseDetailList />
    {/* </div> */}
  </React.Fragment>
);

export default ViewCasePages;
