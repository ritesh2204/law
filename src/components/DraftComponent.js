import React from "react";
import { Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const DraftComponent = () => (
  <React.Fragment>
    <div style={styles.panelMargin}>
      <div className="panel flex-container ">
        <div className="panel-head d-column " style={styles.iconCenter}>
          <Image src="/images/courtgray.png" circular className="img-70" />
          <p
            className="mb-0 mt-0 graytext"
            style={{ fontSize: 18, fontWeight: 500 }}
          >
            High Court
          </p>
        </div>
        <div className="d-column mt-5 " style={{ flex: 6 }}>
          <div className="mr">
            <p className="lightgreen f-24 mb-0">
              <Link to="/updatecase">
                <b className="text-bold-gray">Ashna Chandrakar</b> &nbsp;
              </Link>
            </p>
            <p className="mb-0 text-light-gray f-24">
              rajat jain vs state of chhattisgarh bilaspur (281929)
            </p>
          </div>
        </div>
        <div className="b-left"></div>
        <div className="d-column mt-5 " style={{ flex: 2 }}>
          <div className="mr">
            <p className="text-light-gray f-24 mb-8">
              <b className="text-bold-gray">CASE NO:</b> 281929
            </p>
            <p className="mb-0 text-light-gray f-24">
              <b className="text-bold-gray ">CASE TYPE:</b> CIVIL
            </p>
          </div>
        </div>
        <div className="bg-lightgray">
          <p className="draft-text">Draft</p>
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

export default DraftComponent;
