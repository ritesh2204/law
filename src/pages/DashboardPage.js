import React from "react";
import { Image } from "semantic-ui-react";
import DashBoardDetailBox from "../components/DashBoardDetailBox";
import CaseDiaryListItem from "../components/CaseDiaryListItem";

const DashboardPage = () => (
  <React.Fragment>
    <div style={Styles.pc}>
      <div style={Styles.pcr1}>
        <div style={Styles.pcr1c1}>
          <Image
            src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
            style={{ width: 100 }}
            circular
          />
          <div
            style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}
          >
            <div style={{ fontSize: "1.3rem", marginLeft: 16 }}>Hello,</div>
            <div style={{ fontSize: "2rem", marginLeft: 16 }}>Elon Musk</div>
          </div>
        </div>

        <div className="d-flex">
          <div>
            <DashBoardDetailBox title="Total Client" count={1} />
            <DashBoardDetailBox title="Total Cases" count={12} />
          </div>
          <div style={{ marginLeft: 16 }}>
            <DashBoardDetailBox title="Total Advocates" count={12} />
            <DashBoardDetailBox title="Total Users" count={12} />
          </div>
        </div>
      </div>
      <h2>Case Diary</h2>

      <div className="bordermin"></div>
    </div>

    <CaseDiaryListItem />
  </React.Fragment>
);

export default DashboardPage;

const Styles = {
  pc: { paddingLeft: 32, paddingTop: 24 },
  pcr1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pcr1c1: {
    display: "flex",
    alignItems: "center",
  },
};
