import React, { Component } from "react";
import ProfileListItem from "./ProfileListItem";
import { Divider, Icon } from "semantic-ui-react";

class ProfileList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="d-flex space-between align-items-center">
          <div>
            <h4 className="bill_title">Profile</h4>
          </div>
        </div>
        <Divider />
        <div className="d-flex bill_header  table_header_clients table_margin_clients">
          <div className="flex-1">
            <b>NAME</b>
          </div>
          <div className="flex-1">
            <b>EMAIL</b>
          </div>
          <div className="flex-1">
            <b>MOBILE</b>
          </div>
          <div className="flex-1">
            <b>ADDRESS</b>
          </div>
          <div className="flex-1">
            <b>CITY</b>
          </div>
          <div className="flex-1">
            <b>STATE</b>
          </div>
        </div>
        <br />

        <ProfileListItem />
      </React.Fragment>
    );
  }
}

export default ProfileList;
