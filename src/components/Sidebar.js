import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
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
        <div style={{ marginTop: "2.3rem", marginBottom: "0.8rem" }}>
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
              size={location.pathname === "/cases" ? "large" : ""}
              className={
                location.pathname === "/cases" ? "textblue" : "iconGray"
              }
            />
            <Link
              to="/cases"
              className={location.pathname === "/cases" ? "textblue" : null}
            >
              Cases
            </Link>
          </li>
          <li>
            <Icon
              size={location.pathname === "/organization" ? "large" : ""}
              name="law"
              className={
                location.pathname === "/organization" ? "textblue" : "iconGray"
              }
            />
            <Link
              to="/organization"
              className={
                location.pathname === "/organization" ? "textblue" : null
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
              size={location.pathname === "/bill" ? "large" : ""}
              name="money bill alternate"
              className={
                location.pathname === "/bill" ? "textblue" : "iconGray"
              }
            />
            <Link
              to="/bill"
              className={location.pathname === "/bill" ? "textblue" : null}
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
            <a href="/logout">Log out</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Sidebar);
