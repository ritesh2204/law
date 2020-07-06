import React from "react";
import { Image } from "semantic-ui-react";

const UserDetailBlock = () => (
  <React.Fragment>
    <div style={{ marginTop: 20 }}>
      <div className="panel flex-container ">
        <div
          className="panel-head d-column "
          style={{ flexGrow: 1, marginLeft: 10 }}
        >
          <Image
            src="/images/law.png"
            circular
            className="img-80"
            style={{ marginLeft: 12, marginTop: 18 }}
          />
          {/* <p className="mb-0 mt-10 bold-green">High Court</p> */}
        </div>
        <div className="d-column " style={{ flexGrow: 10 }}>
          <h2 className="green ">Ashna Chandrakar</h2>
          <p className="lightgreen">ashna.chandrakar@gmail.com</p>
        </div>
        <div className="d-column mt-5 b-left " style={{ flexGrow: 2 }}>
          <div className="mr">
            <p className="lightgreen">
              <b className="bold-green fontsize-20">MOBILE:</b> 23 jun,2020
            </p>
            <p className="mb-0 lightgreen">
              <b className="bold-green fontsize-20">PASSWORD:</b> 12345
            </p>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default UserDetailBlock;
