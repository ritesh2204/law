import React, { Component } from "react";
import { Icon, Button } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

class Sidebar extends Component {
  render() {
    console.log(this.props);
    const { location } = this.props;
    console.log(location.pathname);
    return (
      <div
        className="sidenav"
        style={{
          paddingLeft: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div style={{ marginTop: "2.5rem", marginBottom: "0.8rem" }}>
          <Link to="/">
            <Icon name="dashboard" color="blue" style={{ marginLeft: -10 }} />{" "}
            &nbsp;{" "}
            <span style={{ fontSize: 18, fontWeight: "bold" }}>Dashboard</span>
          </Link>
        </div>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li>
            <Icon
              name="suitcase"
              size={location.pathname === "/viewcase" ? "large" : ""}
              className={
                location.pathname === "/viewcase" ? "textblue" : "iconGray"
              }
            />
            <Link
              to="/viewcase"
              className={location.pathname === "/viewcase" ? "textblue" : null}
            >
              Cases
            </Link>
          </li>
          <li>
            <Icon
              size={location.pathname === "/viewadvocate" ? "large" : ""}
              name="law"
              className={
                location.pathname === "/viewadvocate" ? "textblue" : "iconGray"
              }
            />
            <Link
              to="/viewadvocate"
              className={
                location.pathname === "/viewadvocate" ? "textblue" : null
              }
            >
              Organization
            </Link>
          </li>
          <li>
            <Icon
              size={location.pathname === "/clients" ? "large" : ""}
              name="user outline"
              className={
                location.pathname === "/clients" ? "textblue" : "iconGray"
              }
            />
            <Link
              to="/clients"
              className={location.pathname === "/clients" ? "textblue" : null}
            >
              Clients
            </Link>
          </li>
          <li>
            <Icon
              size={location.pathname === "/viewbill" ? "large" : ""}
              name="money bill alternate"
              className={
                location.pathname === "/viewbill" ? "textblue" : "iconGray"
              }
            />
            <Link
              to="/viewbill"
              className={location.pathname === "/viewbill" ? "textblue" : null}
            >
              Bill
            </Link>
          </li>
          <li>
            <Icon
              size={location.pathname === "#" ? "large" : ""}
              name="power"
              className={location.pathname === "#" ? "textblue" : "iconGray"}
            />
            <a href="#">Log out</a>
          </li>
        </ul>
      </div>
    );
  }
}

const styles = {
  dashboardBtn: {
    border: "1px solid rgb(5, 142, 217)",
    borderRadius: 5,
    width: "80%",
    marginRight: 32,
    textAlign: "center",
    padding: "0.5rem 0.9rem",
    color: "rgb(5, 142, 217)",
  },
};

export default withRouter(Sidebar);
