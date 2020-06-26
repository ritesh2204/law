import React from "react";
import { Icon, Image } from "semantic-ui-react";

const ClientListItem = () => {
  return (
    <React.Fragment>
      <div className="d-flex table_margin_clients">
        <div>
          <Image
            src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
            circular
            style={{ width: "50px", marginRight: 20 }}
          />
        </div>
        <div className="flex-7">
          <div className="user_detail_title mb-2">Music Soundsation 2020</div>
          <div className="user_detail_subhead">
            <Icon name="map marker alternate" />
            &nbsp;Jiexpo kemayoran, Jakarta
          </div>
        </div>
        <div className="flex-2 text-right">
          <div className="user_intrests mb-2">
            {" "}
            <span className="blue_dot"></span> &nbsp;Music
          </div>
          <div className="user_detail_subhead">
            <Icon name="clock outline" />
            &nbsp;08 Am - 12 Pm
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ClientListItem;
