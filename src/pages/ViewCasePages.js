import React from "react";
import CaseViewPanel from "../components/CaseViewPanel";
import AddButton from "../components/AddButton";
import DraftComponent from "../components/DraftComponent";
import CaseDiaryListItem from "../components/CaseDiaryListItem";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import CaseDetailList from "../components/CaseDetailList/CaseDetailList";

const ViewCasePages = () => (
  <React.Fragment>
    <div className="mt-24">
      <div className="d-flex space-between align-items-center">
        <div style={styles.caseTitle}>Cases</div>

        <div style={styles.billdateSelect}>
          <Link to="/addcase">
            {" "}
            <b>Add</b> &nbsp; <Icon name="add" className="bill_icon_arrow" />
          </Link>
        </div>
      </div>
      {/* <AddButton name="Cases" path="/addcase" /> */}
      <CaseDetailList />
    </div>
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
  billdateSelect: {
    border: "1.5px solid rgb(5, 142, 217)",
    borderRadius: 8,
    marginRight: 32,
    padding: "0.5rem 0.9rem",
    color: "rgb(5, 142, 217)",
  },
};

export default ViewCasePages;
