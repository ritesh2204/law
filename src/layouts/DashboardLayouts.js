import React from "react";
import Navbar from "../components/Navbar";
import CalendarWidget from "../components/CalendarWidget";
import Sidebar from "../components/Sidebar";

const DashboardLayouts = ({ children }) => (
  <React.Fragment>
    <Navbar />
    <div style={{ display: "flex" }}>
      <div style={{ flexGrow: 1 }}>
        <Sidebar />
      </div>

      {children}

      <div style={{ flexGrow: 2 }}>
        <CalendarWidget />
      </div>
    </div>
  </React.Fragment>
);

export default DashboardLayouts;
