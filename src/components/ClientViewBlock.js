import React from "react";
import { Image, Icon } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

const ClientViewBlock = (props) => {
  console.log(props);

  const {
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
  } = props;
  return (
    <React.Fragment>
      <div style={{ marginTop: 20 }}>
        <div className="panel flex-container ">
          <div className="panel-head d-column " style={styles.iconCenter}>
            <Image src="/images/court.png" circular className="img-70" />
          </div>
          <div className="d-column mt-5 " style={{ flex: 2 }}>
            <div className="mr">
              <p className="lightgreen f-24 mb-0">
                <b className="bold-green">
                  <Link
                    to={
                      props.location.pathname === "/viewadvocate"
                        ? "/updateadvocate"
                        : "/updateclient"
                    }
                  >
                    {" "}
                    {name} &nbsp;
                    <Icon
                      name="edit"
                      className="editIcon"
                      circular
                      size=" small"
                    />
                  </Link>
                </b>
              </p>
              <p className="mb-0 lightgreen f-24">{email}</p>
            </div>
          </div>

          <div className="b-left"></div>
          <div className="d-column mt-5 " style={{ flex: 2 }}>
            <div className="mr">
              <p className="lightgreen f-24 mb-8">
                <b className="bold-green">
                  {labelMobile}
                  {labelPassword}:
                </b>
                {mobile}
                {password}
              </p>
              <p className="mb-0 lightgreen f-24">
                <b className="bold-green ">
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
};

const styles = {
  iconCenter: {
    display: "flex",
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
};

export default withRouter(ClientViewBlock);
