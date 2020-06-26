import React from "react";
import { Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const CaseDetailListItem = (props) => {
  const { past } = props;
  return (
    <React.Fragment>
      <div style={styles.panelMargin}>
        <div className="panel " style={past ? { background: "#F6F6F6" } : null}>
          <div className="flex-container">
            <div className="panel-head d-column " style={styles.iconCenter}>
              <div className="pillid">#28192</div>
              <Image
                src={past ? "/images/courtgray.png" : "/images/court.png"}
                circular
                className="img-50 mt-10 "
              />

              <p
                className={
                  past
                    ? "darkgray  mb-0 text-center "
                    : " text-center lightgreen  mb-0"
                }
                style={{ fontSize: "1rem", fontWeight: 500 }}
              >
                High Court
              </p>
            </div>
            <div className="b-right"></div>

            <div className="d-column mt-5 " style={{ flex: 6 }}>
              <div className="mr">
                <div className="lightgreen f-24 mb-2 ">
                  <div className={past ? "darkgray " : "bold-green"}>
                    {" "}
                    <Link to="/updatecase">
                      Rajat jain vs state of chhattisgarh bilaspur
                    </Link>
                    <span className={past ? "draftpill" : "ongoingpill"}>
                      {past ? "Draft" : "On Going"}
                    </span>
                  </div>
                </div>
                <div
                  className={
                    past ? "lightgray f-12 mb-2 " : "lightgreen mb-2  f-12 "
                  }
                >
                  <i>Ashana Chandrakar</i>
                </div>

                <div className="lightgray f-12 mt-20">
                  Mahendra Pratap Singh, Raj Sahu
                </div>
                {/* <div className="d-column mt-5 " style={{ flex: 2 }}>
                  <div className="mr">
                    <div className="flex-container flex-end flex-nowarp">
                      <div
                        className={
                          past ? "category-gray-pill mr-1" : "pill mr-1"
                        }
                      >
                        Civil
                      </div>
                      <div
                        className={
                          past ? "category-gray-pill mr-1" : "pill mr-1"
                        }
                      >
                        Family
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
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
    padding: 10,
    color: "#FFF",
    marginLeft: 0,
    background: "#1D9B9D",
    borderRadius: "0px 50px 50px 0px",
  },
  lightPill: {
    flex: 6,
    padding: 10,
    color: "#000",
    marginLeft: 0,
    background: "#DEE2E2",
    borderRadius: "0px 50px 50px 0px",
  },
  lightGreenPill: {
    flex: 1,
    padding: 10,
    textAlign: "center",
    borderRadius: "50px 0px 0px 50px",
    color: "#000",
    background: "#36A878",
  },
  lightGreenPillPast: {
    flex: 1,
    padding: 10,
    textAlign: "center",
    borderRadius: "50px 0px 0px 50px",
    color: "#FFF",

    background: "#36A878",
  },
  hardGrayPill: {
    flex: 1,
    padding: 10,
    textAlign: "center",
    borderRadius: "50px 0px 0px 50px",
    color: "#FFF",

    background: "#BABEBE",
  },

  roundTitle: {
    background: "#000",
  },
  iconCenter: {
    display: "flex",
    textAlign: "center",
    width: "10rem",
    justifyContent: "center",
    alignItems: "center",
  },
  panelMargin: {
    marginTop: 20,
    marginLeft: 9,
    marginRight: 7,
  },
};

export default CaseDetailListItem;
