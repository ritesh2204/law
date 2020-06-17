import React from "react";
import { Image } from "semantic-ui-react";

const CaseViewPanel = () => (
  <React.Fragment>
    <div style={{ marginTop: 20 }}>
      <div className="panel flex-container ">
        <div
          className="panel-head d-column "
          style={{ flexGrow: 1, marginLeft: 10 }}
        >
          <Image
            src="/images/court.png"
            style={{ marginLeft: 12, width: 50 }}
          />
          <p className="mb-0 mt-10 bold-green">High Court</p>
        </div>
        <div className="d-column " style={{ flexGrow: 10 }}>
          <h2 className="green ">Ashna Chandrakar</h2>
          <p className="lightgreen mb-2">
            rajat jain vs state of chhattisgarh bilaspur (281929)
          </p>
        </div>
        <div className="d-column mt-5 b-left " style={{ flexGrow: 2 }}>
          <div className="mr">
            <p className="lightgreen ">
              <b className="bold-green fontsize-20">CASE NO:</b> 281929
            </p>
            <p className="lightgreen">
              <b className="bold-green fontsize-20">CASE TYPE:</b> CIVIL
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

export default CaseViewPanel;
