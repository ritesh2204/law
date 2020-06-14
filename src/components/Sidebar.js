import React from "react";
import { Icon, Grid, GridColumn, Image, Container } from "semantic-ui-react";

const Sidebar = () => (
  <div>
    <div>
      <div className="sidenav">
        <div>
          <p className="heading">Dashboard</p>
          <p className="subhead">MENU</p>
          <a href="#about">
            <Icon name="user outline" />
            Clients
          </a>
          <a href="#services">
            <Icon name="suitcase" />
            Cases
          </a>
          <a href="#clients">
            <Icon name="law" />
            Advocates
          </a>
          <a href="#clients">
            <Icon name="user outline" />
            Users
          </a>
          <br />
          <p className="subhead">BILL AREA</p>
          <a href="#contact">
            <Icon name="money bill alternate" />
            Bill
          </a>
        </div>
      </div>
    </div>
    <div></div>
  </div>
);

export default Sidebar;
