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

const styles = {
  caseTitle: {
    margin: "24px 0px 18px 30px",
    fontSize: "2rem",
    fontFamily: "Asap, sans-serif",
    fontWeight: 600,
    // borderBottom: "4px solid blue",
    // borderSpacing: "10px",
  },
};

export default ViewCasePages;
