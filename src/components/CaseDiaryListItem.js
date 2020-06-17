import React from "react";
import { Image } from "semantic-ui-react";

const CaseDiaryListItem = () => {
  return (
    <div style={styles.panelMargin}>
      <div className="panel flex-container ">
        <div className="panel-head d-column " style={styles.iconCenter}>
          <Image src="/images/court.png" circular className="img-80" />
          <p className="mb-0 mt-10 bold-green ">High Court</p>
        </div>
        <div className="d-column " style={{ flex: 6 }}>
          <h2 className="green ">Ashna Chandrakar</h2>
          <p className="lightgreen">
            rajat jain vs state of chhattisgarh bilaspur (281929)
          </p>
        </div>
        <div className="b-left"></div>
        <div className="d-column mt-5 " style={{ flex: 2 }}>
          <div className="mr">
            <p className="lightgreen">
              <b className="bold-green fontsize-20">NHD</b> 23 jun,2020
            </p>
            <p className="mb-0 lightgreen">
              <b className="bold-green fontsize-20">LHD</b> 11 jun,2020
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  iconCenter: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  panelMargin: {
    marginTop: 20,
    marginLeft: 9,
    marginRight: 7,
  },
};

export default CaseDiaryListItem;
