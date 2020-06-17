import React from "react";
import { Image } from "semantic-ui-react";

const ClientViewBlock = ({
  name,
  email,
  mobile,
  Address,
  password,
  type,
  labelMobile,
  labelAddress,
  labelType,
  labelPassword,
}) => (
  <React.Fragment>
    <div style={{ marginTop: 20 }}>
      <div className="panel flex-container ">
        <div
          className="panel-head d-column "
          style={{ flexGrow: 1, marginLeft: 10 }}
        >
          <Image
            src="/images/user.png"
            circular
            className="img-80"
            style={{ marginLeft: 12, marginTop: 18 }}
          />
          {/* <p className="mb-0 mt-10 bold-green">High Court</p> */}
        </div>
        <div className="d-column " style={{ flexGrow: 10 }}>
          <h2 className="green ">{name}</h2>
          <p className="lightgreen">{email}</p>
        </div>
        <div className="d-column mt-5 b-left " style={{ flexGrow: 2 }}>
          <div className="mr">
            <p className="lightgreen">
              <b className="bold-green fontsize-20">
                {labelMobile}
                {labelPassword}
              </b>{" "}
              {mobile}
              {password}
            </p>
            <p className="mb-0 lightgreen">
              <b className="bold-green fontsize-20">
                {labelAddress}
                {labelType}:
              </b>{" "}
              {Address}
              {type}
            </p>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default ClientViewBlock;
