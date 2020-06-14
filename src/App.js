import React from "react";
import "./styles.css";
import DashboardLayouts from "./layouts/DashboardLayouts";
import DashboardPage from "./pages/dashboardPage";

export default function App() {
  return (
    <div className="App">
      <DashboardLayouts>
        <DashboardPage />
      </DashboardLayouts>
    </div>
  );
}
