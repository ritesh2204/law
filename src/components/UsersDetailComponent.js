import React from "react";
import { Image, Icon } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

const ClientViewBlock = (props) => {
  return (
    <React.Fragment>
      <div style={{ marginTop: 20 }}>
        <div
          className="panel flex-container align-items-center"
          style={{
            background: "#FFF3E9",
            border: "1px solid #7C3C21",
          }}
        >
          <div className="panel-head d-column " style={styles.iconCenter}>
            <Image src="/images/adminlogo.svg" circular className="img-50" />
            <p className="browntext">Admin</p>
          </div>
          <div className="d-column " style={{ flex: 2 }}>
            <div className="ml-20">
              <p className=" f-24 mb-0 ">
                <b className="text-orange ">
                  <Link
                    to={
                      props.location.pathname === "/viewadvocate"
                        ? "/updateadvocate"
                        : "/updateclient"
                    }
                  >
                    {" "}
                    Sanjay Mahajan &nbsp;
                  </Link>
                </b>
              </p>
            </div>
          </div>

          <div
            className="d-column"
            style={{ flex: 2, borderLeft: "2px solid #73c2fb" }}
          >
            <div className="ml-20">
              <p className="text-light-orange f-24 mb-0">
                <Icon name="mail" size="small" />
                sanjaymahajan90@gmail.com
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
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
};

export default withRouter(ClientViewBlock);

// #F2F4F7
