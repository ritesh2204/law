import React from "react";
import { Icon, Grid, GridColumn, Image, Container } from "semantic-ui-react";

const Sidebar = () => (
  <div>
    <div>
      <div className="sidenav">
        <div>
          <p className="heading">Dashboard</p>
          <p className="subhead">PATIENTS</p>
          <a href="#about">
            <Icon name="hand point right outline" />
            Visits
          </a>
          <a href="#services">
            <Icon name="hand point right outline" />
            Patients
          </a>
          <a href="#clients">
            <Icon name="hand point right outline" />
            Analytics
          </a>

          <br />
          <p className="subhead">MY PROFILE</p>
          <a href="#contact">
            <Icon name="setting " />
            Settings
          </a>
        </div>
      </div>
    </div>
    <div></div>
  </div>
);

export default Sidebar;
