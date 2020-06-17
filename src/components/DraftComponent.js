import React from "react";
import { Image } from "semantic-ui-react";

const DraftComponent = () => (
  <React.Fragment>
    <div style={{ marginTop: 20 }}>
      <div className="panel flex-container bg-f6 ">
        <div className="panel-head d-column " style={styles.iconCenter}>
          <Image src="/images/court.png" circular className="img-80" />
          <p className="mb-0 mt-10 bold-green ">High Court</p>
        </div>
        <div className="d-column " style={{ flex: 6 }}>
          <h2 className="text-bold-gray">Ashna Chandrakar</h2>
          <p className="text-light-gray mb-2">
            rajat jain vs state of chhattisgarh bilaspur (281929)
          </p>
        </div>
        <div className="d-column mt-5 b-left " style={{ flex: 2 }}>
          <div className="mr">
            <p className="text-light-gray">
              <b className="text-bold-gray fontsize-20">CASE NO:</b> 281929
            </p>
            <p className="text-light-gray">
              <b className="text-bold-gray fontsize-20">CASE TYPE:</b> CIVIL
            </p>
          </div>
        </div>
        <div className="bg-lightgray">
          <p className="ongoingtext">DRAFT</p>
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
};

export default DraftComponent;
