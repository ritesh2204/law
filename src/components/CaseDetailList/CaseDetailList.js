import React from "react";
import CaseDetailListItem from "./CaseDetailListItem";

const CaseDetailList = () => {
  return (
    <React.Fragment>
      <CaseDetailListItem />
      <CaseDetailListItem past={true} />
    </React.Fragment>
  );
};

export default CaseDetailList;
