import React from "react";
import Navbar from "../components/Navbar";
import CalendarWidget from "../components/CalendarWidget";
import Sidebar from "../components/Sidebar";

const DashboardLayouts = ({ children }) => (
  <React.Fragment>
    <Navbar />

    <div style={{ display: "flex" }}>
      <div style={{ flex: 2 }}>
        <Sidebar />
      </div>

      {children}
      <div style={{ flex: 2 }}>
        <CalendarWidget />
      </div>
    </div>
  </React.Fragment>
);

export default DashboardLayouts;
