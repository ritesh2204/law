import React from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const CaseDiaryListItem = ({ past }) => {
  return (
    <div style={styles.panelMargin}>
      <div
        className="panel flex-container "
        style={past ? { background: "#F6F6F6" } : null}
      >
        <div className="panel-head d-column " style={styles.iconCenter}>
          <Image
            src={past ? "/images/courtgray.png" : "/images/court.png"}
            circular
            className="img-70"
          />

          <p
            className={past ? "darkgray f-24 mb-0" : "lightgreen f-24 mb-0"}
            style={{ fontSize: 18, fontWeight: 500 }}
          >
            High Court
          </p>
        </div>
        <div className="b-right"></div>

        <div className="d-column mt-5 " style={{ flex: 6 }}>
          <div className="mr">
            <p className="lightgreen f-24 mb-0">
              <b className={past ? "darkgray" : "bold-green"}>
                {" "}
                <Link to="/nexthearing">Ashna Chandrakar</Link>
              </b>
            </p>
            <p
              className={past ? "lightgray f-24 mb-0" : "lightgreen f-24 mb-0"}
            >
              rajat jain vs state of chhattisgarh bilaspur (281929)
            </p>
          </div>
        </div>

        <div className="d-column mt-5 " style={{ flex: 2 }}>
          <div className="mr">
            <div className="flex-container  space-around">
              <div className="pill">Civil</div>
              <div className="pill">Family</div>
              <div className="pill">#28192</div>
            </div>

            {/* <p
              className={past ? "lightgray f-24 mb-8" : "lightgreen f-24 mb-8"}
            >
              <b className={past ? "darkgray font-weight-bold" : "bold-green "}>
                NHD
              </b>{" "}
              23 jun,2020
            </p>
            <p
              className={past ? "lightgray f-24 mb-8" : "lightgreen f-24 mb-8"}
            >
              <b className={past ? "darkgray font-weight-bold" : "bold-green "}>
                LHD
              </b>{" "}
              11 jun,2020
            </p> */}
          </div>
        </div>

        <div style={{ ...styles.pillDarkGreen, display: "flex" }}>
          <div style={past ? styles.lightGreenPillPast : styles.hardGrayPill}>
            <strong
              style={styles.fs18}
              className={past ? "brown whiteSpace" : "brown whiteSpace"}
            >
              23 Jun, 2020
            </strong>
          </div>
          <div
            className={past ? "black ml-10 lg" : "white ml-10 darkcyan"}
            style={{
              ...styles.fs16,
              flex: 6,
              padding: 15,
              // color: "#FFF",
              marginLeft: 0,
              // background: "#1D9B9D",
              borderRadius: "0px 50px 50px 0px",
            }}
          >
            Evedence presentation
          </div>
        </div>

        <div style={{ ...styles.pillDarkGreen, display: "flex" }}>
          <div style={past ? styles.lightGreenPillPast : styles.hardGrayPill}>
            <strong
              style={styles.fs18}
              className={past ? "brown whiteSpace" : "brown whiteSpace"}
            >
              22 Jun, 2020
            </strong>
          </div>
          <div
            className="lg black"
            style={{
              ...styles.fs16,
              flex: 6,
              padding: 15,
              color: "#371B00         ",
              marginLeft: 0,
              // background: "#7B7D7D",
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
        <img
          src="https://image.flaticon.com/icons/svg/892/892498.svg"
          style={{ width: 30, margin: "0.5rem auto" }}
        />
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

  darkGrayPill: {
    flex: 6,
    padding: 15,
    color: "#FFF",
    marginLeft: 0,
    background: "#1D9B9D",
    borderRadius: "0px 50px 50px 0px",
  },
  lightPill: {
    flex: 6,
    padding: 15,
    color: "#000",
    marginLeft: 0,
    background: "#DEE2E2",
    borderRadius: "0px 50px 50px 0px",
  },
  lightGreenPill: {
    flex: 1,
    padding: 15,
    textAlign: "center",
    borderRadius: "50px 0px 0px 50px",
    color: "#000",
    background: "#36A878",
  },
  lightGreenPillPast: {
    flex: 1,
    padding: 15,
    textAlign: "center",
    borderRadius: "50px 0px 0px 50px",
    color: "#FFF",

    background: "#BCBCBC",
  },
  hardGrayPill: {
    flex: 1,
    padding: 15,
    textAlign: "center",
    borderRadius: "50px 0px 0px 50px",
    color: "#FFF",

    background: "#BABEBE",
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
