import React from "react";
import Navbar from "../components/Navbar";
import CalendarWidget from "../components/CalendarWidget";
import Sidebar from "../components/Sidebar";

const DashboardLayouts = ({ children }) => (
  <React.Fragment>
    <Navbar />
    <div style={{ display: "flex", marginTop: 55 }}>
      <div style={{ flex: 1 }}>
        <Sidebar />
      </div>
      <div style={{ flex: 6 }}>{children}</div>
      <div style={{ flex: 1.5 }}>
        <CalendarWidget />
      </div>
    </div>
  </React.Fragment>
);

export default DashboardLayouts;
