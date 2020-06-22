import React from "react";
import CaseViewPanel from "../components/CaseViewPanel";
import AddButton from "../components/AddButton";
import DraftComponent from "../components/DraftComponent";

const ViewCasePages = () => (
  <React.Fragment>
    <div className="mt-24">
      <AddButton name="Cases" path="/addcase" />

      <CaseViewPanel />
      <DraftComponent />
    </div>
  </React.Fragment>
);

export default ViewCasePages;
