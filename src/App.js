import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DashboardLayouts from "./layouts/DashboardLayouts";
import DashboardPage from "./pages/DashboardPage";
import UserDetailPage from "./pages/UserDetailPage";
import AddUserPage from "./pages/AddUserPage";
import AddClientPage from "./pages/AddClientPage";
import ViewCasePages from "./pages/ViewCasePages";
import AddCasePage from "./pages/AddCasePage";
import ViewClientPage from "./pages/ViewClientPage";
import ViewAdvocatePage from "./pages/ViewAdvocatePage";

const Dashboard = () => (
  <DashboardLayouts>
    <DashboardPage />
  </DashboardLayouts>
);

const User = () => (
  <DashboardLayouts>
    <UserDetailPage />
  </DashboardLayouts>
);
const addclient = () => (
  <DashboardLayouts>
    <AddClientPage />
  </DashboardLayouts>
);

const clients = () => (
  <DashboardLayouts>
    <ViewClientPage />
  </DashboardLayouts>
);

const adduser = () => (
  <DashboardLayouts>
    <AddUserPage />
  </DashboardLayouts>
);

const viewcase = () => (
  <DashboardLayouts>
    <ViewCasePages />
  </DashboardLayouts>
);

const viewadvocates = () => (
  <DashboardLayouts>
    <ViewAdvocatePage />
  </DashboardLayouts>
);

const addcase = () => (
  <DashboardLayouts>
    <AddCasePage />
  </DashboardLayouts>
);
export default function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/users" component={User} />
        <Route exact path="/addclients" component={addclient} />
        <Route exact path="/clients" component={clients} />
        <Route exact path="/adduser" component={adduser} />
        <Route exact path="/viewcase" component={viewcase} />
        <Route exact path="/addcase" component={addcase} />

        <Route exact path="/advocates" component={viewadvocates} />
      </Router>
    </div>
  );
}
