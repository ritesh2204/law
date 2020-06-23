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
              <h3 style={{ display: "flex" }}>
                <img
                  src="/images/dash.png"
                  style={{ borderBottom: "2px solid blue", paddingBottom: 2 }}
                  alt="dahboardlogo"
                />
                <Link
                  to="/"
                  className={location.pathname === "/" ? "textGreen" : null}
                >
                  <b className="ml-10">Dashboard</b>
                </Link>
              </h3>
            </li>
          </ul>

          <ul style={{ listStyle: "none" }}>
            <h4> MENU</h4>
            <li>
              <Icon
                name="suitcase"
                className={
                  location.pathname === "/viewcase" ? "textGreen" : "iconGray"
                }
              />
              <Link
                to="/viewcase"
                className={
                  location.pathname === "/viewcase" ? "textGreen" : null
                }
              >
                Cases
              </Link>
            </li>
            <li>
              <Icon
                name="law"
                className={
                  location.pathname === "/viewadvocate"
                    ? "textGreen"
                    : "iconGray"
                }
              />
              <Link
                to="/viewadvocate"
                className={
                  location.pathname === "/viewadvocate" ? "textGreen" : null
                }
              >
                Advocates
              </Link>
            </li>
            <li>
              <Icon
                name="user outline"
                className={
                  location.pathname === "/clients" ? "textGreen" : "iconGray"
                }
              />
              <Link
                to="/clients"
                className={
                  location.pathname === "/clients" ? "textGreen" : null
                }
              >
                Clients
              </Link>
            </li>
            <li>
              <Icon
                name="money bill alternate"
                className={
                  location.pathname === "/viewbill" ? "textGreen" : "iconGray"
                }
              />
              <Link
                to="/viewbill"
                className={
                  location.pathname === "/viewbill" ? "textGreen" : null
                }
              >
                Bill
              </Link>
            </li>
            <li>
              <Icon
                name="power"
                className={location.pathname === "/" ? "textGreen" : "iconGray"}
              />
              <Link to="/">Log out</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
