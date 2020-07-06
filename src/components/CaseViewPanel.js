import React from "react";
import { Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const CaseViewPanel = () => (
  <React.Fragment>
    <div style={styles.panelMargin}>
      <div className="panel flex-container ">
        <div className="panel-head d-column " style={styles.iconCenter}>
          <Image src="/images/court.png" circular className="img-70" />
          <p
            className="mb-0 mt-0 bold-green"
            style={{ fontSize: 18, fontWeight: 500 }}
          >
            High Court
          </p>
        </div>
        <div className="d-column mt-5 " style={{ flex: 6 }}>
          <div className="mr">
            <p className="lightgreen f-24 mb-0">
              <b className="bold-green">Ashna Chandrakar</b> &nbsp;
            </p>
            <p className="mb-0 lightgreen f-24">
              <Link to="/updatecase">
                rajat jain vs state of chhattisgarh bilaspur (281929)
              </Link>
            </p>
          </div>
        </div>
        <div className="b-left"></div>
        <div className="d-column mt-5 " style={{ flex: 2 }}>
          <div className="mr">
            <p className="lightgreen f-24 mb-8">
              <b className="bold-green">CASE NO:</b> 281929
            </p>
            <p className="mb-0 lightgreen f-24">
              <b className="bold-green ">CASE TYPE:</b> CIVIL
            </p>
          </div>
        </div>
        <div className="ongoing">
          <p className="ongoingtext">OnGoing</p>
        </div>
      </div>
    </div>
  </React.Fragment>
);

const styles = {
  iconCenter: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  panelMargin: {
    marginTop: 20,
  },
};

export default CaseViewPanel;
