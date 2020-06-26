import React, { Component } from "react";
import { Icon } from "semantic-ui-react";

class ProfileListItem extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="d-flex bill_body align-items-center ">
          <div className="flex-1 flex-container align-items-center">
            Akash Singh
          </div>
          <div className="flex-1">
            <Icon name="map marker alternate" />
            Mungeli, CG
          </div>
          <div className="flex-1">akashsingh@gmail.com</div>
          <div className="flex-1">Mungeli, CG</div>
          <div className="flex-1 ">Raipur</div>
          <div className="flex-1 ">Chhattisgarh</div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProfileListItem;
