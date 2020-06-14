import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DashboardLayouts from "./layouts/DashboardLayouts";
import DashboardPage from "./pages/dashboardPage";
import UserDetailPage from "./pages/UserDetailPage";

const Dashboard = () => (
  <DashboardLayouts>
    <div style={{ flexGrow: 30 }}>
      <DashboardPage />
    </div>
  </DashboardLayouts>
);

const User = () => (
  <DashboardLayouts>
    <div style={{ flexGrow: 30 }}>
      <UserDetailPage />
    </div>
  </DashboardLayouts>
);

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/users" component={User} />
      </Router>
    </div>
  );
}
