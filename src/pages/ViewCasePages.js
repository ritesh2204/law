import React from "react";
import CaseViewPanel from "../components/CaseViewPanel";
import AddButton from "../components/AddButton";
import DraftComponent from "../components/DraftComponent";
import CaseDiaryListItem from "../components/CaseDiaryListItem";

const ViewCasePages = () => (
  <React.Fragment>
    <div className="mt-24">
      <AddButton name="Cases" path="/addcase" />
      <CaseDiaryListItem />
      <CaseDiaryListItem past={true} />

      {/* <CaseViewPanel /> */}
      {/* <DraftComponent /> */}
    </div>
  </React.Fragment>
);

export default ViewCasePages;
