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
    type,
    labelMobile,
    labelAddress,
    labelType,
    labelPassword,
    bgcolorblue,
  } = props;
  return (
    <React.Fragment>
      <div style={{ marginTop: 20 }}>
        <div
          className="panel flex-container "
          style={{
            background: bgcolorblue ? "#ECF6FE" : "#F1F8DD",
            border: "1px solid #238DD8",
          }}
        >
          {/* <div className="panel-head d-column " style={styles.iconCenter}>
            <Image src="/images/court.png" circular className="img-70" />
          </div> */}
          <div className="d-column " style={{ flex: 2 }}>
            <div className="ml-20">
              <p className=" f-24 mb-0 ">
                <b className="text-info">
                  <Link
                    to={
                      props.location.pathname === "/viewadvocate"
                        ? "/updateadvocate"
                        : "/updateclient"
                    }
                  >
                    {" "}
                    <Icon name="user circle" style={{ fontSize: 21 }} /> {name}{" "}
                    &nbsp;
                  </Link>
                </b>
              </p>
              <p className="mb-0 text-info f-16">
                <Icon name="mobile alternate" size="small" />
                {mobile}
              </p>
            </div>
          </div>

          <div className="b-left-blue"></div>
          <div className="d-column" style={{ flex: 2 }}>
            <div className="ml-20">
              <p className="text-info f-24 mb-0">
                <Icon name="mail" size="small" />
                {email}
              </p>
              <p className="mb-0 text-info f-16">
                <Icon name="map marker alternate" size="small" />

                {Address}
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
