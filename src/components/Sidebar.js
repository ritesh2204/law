import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

class Sidebar extends Component {
  render() {
    console.log(this.props);
    const { location } = this.props;
    console.log(location.pathname);
    return (
      <div className="sidenav">
        <div>
          <br />
          <ul>
            <li>
              <h2 className="dashboardBtn">
                <Link
                  to="/"
                  className={location.pathname === "/" ? "textblue" : null}
                >
                  <b>Dashboard</b>
                </Link>
              </h2>
            </li>
          </ul>

          <ul style={{ listStyle: "none" }}>
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
                className={
                  location.pathname === "/viewcase" ? "textblue" : null
                }
              >
                Cases
              </Link>
            </li>
            <li>
              <Icon
                size={location.pathname === "/viewadvocate" ? "large" : ""}
                name="law"
                className={
                  location.pathname === "/viewadvocate"
                    ? "textblue"
                    : "iconGray"
                }
              />
              <Link
                to="/viewadvocate"
                className={
                  location.pathname === "/viewadvocate" ? "textblue" : null
                }
              >
                Users
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
                className={
                  location.pathname === "/viewbill" ? "textblue" : null
                }
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
