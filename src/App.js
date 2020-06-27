import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DashboardLayouts from "./layouts/DashboardLayouts";
import DashboardPage from "./pages/DashboardPage";
import UserDetailPage from "./pages/UserDetailPage";
import AddAdvocatePage from "./pages/AddAdvocatePage";
import AddClientPage from "./pages/AddClientPage";
import ViewCasePages from "./pages/ViewCasePages";
import AddCasePage from "./pages/AddCasePage";
import ViewClientPage from "./pages/ViewClientPage";
import ViewAdvocatePage from "./pages/ViewAdvocatePage";
import ClientUpdatePage from "./pages/ClientUpdatePage";
import ViewBillPage from "./pages/ViewBillPage";
import CreateBillPage from "./pages/CreateBillPage";
import EditBillPage from "./pages/EditBillPage";
import NextHearingPage from "./pages/NextHearingPage";
import CaseDetailPage from "./pages/CaseDetailPage";
import ProfilePage from "./pages/ProfilePage";
import UpdateAdvocatePage from "./pages/UpdateAdvocatePage";

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

const addadvocate = () => (
  <DashboardLayouts>
    <AddAdvocatePage />
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

const updateadvocateform = () => (
  <DashboardLayouts>
    <UpdateAdvocatePage />
  </DashboardLayouts>
);

const updateclientform = () => (
  <DashboardLayouts>
    <ClientUpdatePage />
  </DashboardLayouts>
);

const viewbill = () => (
  <DashboardLayouts>
    <ViewBillPage />
  </DashboardLayouts>
);

const createbill = () => (
  <DashboardLayouts>
    <CreateBillPage />
  </DashboardLayouts>
);

const editbill = () => (
  <DashboardLayouts>
    <EditBillPage />
  </DashboardLayouts>
);

const nexthearing = () => (
  <DashboardLayouts>
    <NextHearingPage />
  </DashboardLayouts>
);

const casedetailpage = () => (
  <DashboardLayouts>
    <CaseDetailPage />
  </DashboardLayouts>
);

const profilepage = () => (
  <DashboardLayouts>
    <ProfilePage />
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
        <Route exact path="/addadvocate" component={addadvocate} />
        <Route exact path="/viewcase" component={viewcase} />
        <Route exact path="/addcase" component={addcase} />
        <Route exact path="/viewadvocate" component={viewadvocates} />
        <Route exact path="/user_update" component={updateadvocateform} />
        <Route exact path="/updateclient" component={updateclientform} />
        <Route exact path="/viewbill" component={viewbill} />
        <Route exact path="/createbill" component={createbill} />
        <Route exact path="/editbill" component={editbill} />
        <Route exact path="/nexthearing" component={nexthearing} />
        <Route exact path="/updatecase" component={casedetailpage} />
        <Route exact path="/profile" component={profilepage} />
      </Router>
    </div>
  );
}
