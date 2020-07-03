import React from "react";
import { Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

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
          <div className="user_detail_title mb-2">
            <Link to="/clients/1">Rajat Jain</Link>
          </div>
          <div className="user_detail_subhead">
            <Icon name="map marker alternate" />
            &nbsp;Mungeli, Raipur (Chhattisgarh)
          </div>
        </div>
        <div className="flex-2 text-right">
          <div className="user_intrests mb-2">
            {" "}
            {/* <span className="blue_dot"></span> */}
            &nbsp;+91-884455555
          </div>
          <div className="user_detail_subhead">
            <Icon name="mail outline" />
            &nbsp;rajatjain@gmail.com
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ClientListItem;
