import React from "react";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Sidebar = () => (
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
            <b className="ml-10">
              <Link to="/">Dashboard</Link>
            </b>
          </h3>
        </li>
      </ul>

      <ul style={{ listStyle: "none" }}>
        <h4> MENU</h4>
        <li>
          <Icon name="user outline" color="gray" />
          <Link to="/clients">Clients</Link>
        </li>
        <li>
          <Icon name="suitcase" color="gray" />
          <Link to="/viewcase">Cases</Link>
        </li>
        <li>
          <Icon name="law" color="gray" />
          <Link to="/advocates">Advocates</Link>
        </li>
      </ul>

      <ul>
        <h4>BILL AREA</h4>
        <li>
          <Icon name="money bill alternate" color="gray" />
          <Link to="/">Bill</Link>
        </li>
      </ul>

      <ul>
        <h4>LOGOUT AREA</h4>

        <li>
          <Icon name="power" color="gray" />
          <Link to="/">Log out</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Sidebar;
