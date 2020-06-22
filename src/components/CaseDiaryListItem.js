import React from "react";
import { Image } from "semantic-ui-react";

const CaseDiaryListItem = () => {
  return (
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
              <b className="bold-green">Ashna Chandrakar</b>
            </p>
            <p className="mb-0 lightgreen f-24">
              rajat jain vs state of chhattisgarh bilaspur (281929)
            </p>
          </div>
        </div>
        <div className="b-left"></div>
        <div className="d-column mt-5 " style={{ flex: 2 }}>
          <div className="mr">
            <p className="lightgreen f-24 mb-8">
              <b className="bold-green">NHD</b> 23 jun,2020
            </p>
            <p className="mb-0 lightgreen f-24">
              <b className="bold-green ">LHD</b> 11 jun,2020
            </p>
          </div>
        </div>

        <div style={{ ...styles.pillDarkGreen, display: "flex" }}>
          <div style={styles.lightGreenPill}>
            <strong style={styles.fs18} className="whiteSpace">
              CURRENT STAGE
            </strong>
          </div>
          <div
            className="ml-10"
            style={{
              ...styles.fs16,
              flex: 6,
              padding: 15,
              color: "#FFF",
              marginLeft: 0,
              background: "#1D9B9D",
              borderRadius: "0px 50px 50px 0px",
            }}
          >
            Evedence presentation
          </div>
        </div>

        <div style={{ ...styles.pillDarkGreen, display: "flex" }}>
          <div style={styles.hardGrayPill}>
            <strong style={styles.fs18} className="whiteSpace">
              LAST STAGE
            </strong>
          </div>
          <div
            className="ml-10"
            style={{
              ...styles.fs16,
              flex: 6,
              padding: 15,
              color: "#FFF",
              marginLeft: 0,
              background: "#7B7D7D",
              borderRadius: "0px 50px 50px 0px",
            }}
          >
            Evedence presentation
          </div>
        </div>

        {/* <div style={{ display: "flex" }}>
          <div style={{ border: "1px solid red", flex: 1 }}>afkahfka</div>
          <div style={{ border: "1px solid black", flex: 6 }}>asfasf</div>
        </div> */}
      </div>
    </div>
  );
};

const styles = {
  pillDarkGreen: {
    borderRadius: 50,
    marginTop: 8,
    color: "#fff",
    width: "100%",
    display: "flex",
  },
  fs18: {
    fontSize: 16,
  },
  fs16: {
    fontSize: 16,
  },
  lightGreenPill: {
    flex: 1,
    padding: 15,
    textAlign: "center",
    borderRadius: "50px 0px 0px 50px",
    color: "#FFF",

    background: "#36A878",
  },
  hardGrayPill: {
    flex: 1,
    padding: 15,
    textAlign: "center",
    borderRadius: "50px 0px 0px 50px",
    color: "#FFF",

    background: "#545454",
  },

  roundTitle: {
    background: "#000",
  },
  lightGrayPill: {},

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
