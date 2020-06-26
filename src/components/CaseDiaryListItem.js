import React, { Component } from "react";
import { Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
// import { zoomIn } from "react-animations";
// import Radium, { StyleRoot } from "radium";
import Fade from "react-reveal/Fade";

// const stylesAnimate = {
//   zoomIn: {
//     animation: "x 1s",
//     to: { top: "-200px" },
//     from: { top: "0px" },
//     animationName: Radium.keyframes(zoomIn, "zoomIn"),
//   },
// };
class CaseDiaryListItem extends Component {
  constructor(props) {
    super(props);
    const { open } = props;
    this.state = {
      isOpen: open || false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;
    const { past, courtName } = this.props;
    return (
      <div style={styles.panelMargin}>
        <div className="panel" style={past ? { background: "#F6F6F6" } : null}>
          {/* <div className="d-column mt-5 " style={{ flex: 2 }}>
            <div className="mr">
              <div className="flex-container flex-end flex-nowarp">
                <div className="pill mr-1">Civil</div>
                <div className="pill  mr-1">Family</div>
              </div>
            </div>
          </div> */}
          {/* <div style={{ border: "1px solid red" }}>hello</div> */}
          <div className="flex-container">
            <div
              className="panel-head d-column pt-0 pb-0"
              style={styles.iconCenter}
            >
              <div className="pillid">#28192</div>
              <Image
                src={past ? "/images/courtgray.png" : "/images/court.png"}
                circular
                className="img-50 "
              />

              <p
                className={
                  past
                    ? "darkgray  mb-0 text-center"
                    : " text-center lightgreen f mb-0"
                }
                style={{ fontSize: "1rem", fontWeight: 500 }}
              >
                {courtName}
              </p>
            </div>
            <div className="b-right"></div>

            <div className=" mt-5 " style={{ flex: 6 }}>
              <div className="mr">
                <div className="f-24 mb-2 flex-container">
                  <div className="flex-1">
                    <b className={past ? "darkgray" : "darkbrown"}>
                      {" "}
                      <Link to="/updatecase">
                        Rajat jain vs State of chhattisgarh bilaspur
                      </Link>
                      <span className={past ? "draftpill" : "ongoingpill"}>
                        {past ? "Draft" : "On Going"}
                      </span>
                    </b>
                  </div>
                  <div className="mr flex-end">
                    <div className="flex-container flex-nowarp">
                      <div className="pill mr-1">Civil</div>
                      <div className="pill  mr-1">Family</div>
                    </div>
                  </div>
                </div>

                <div
                  className={
                    past ? "lightgray f-16 mb-0" : "bold-green f-16 mb-0"
                  }
                >
                  <i> Ashna Chandrakar</i>
                </div>

                <div style={{ ...styles.pillDarkGreen, display: "flex" }}>
                  <div style={styles.lightGreenPillPast}>
                    <strong className="whitespace case_diary_date ">
                      <Icon name="clock outline" />
                      24 Jun, 2020
                    </strong>
                  </div>
                  <div
                    className={
                      past
                        ? "black ml-10 lg case_diary_date"
                        : " case_diary_date white ml-10"
                    }
                    style={{
                      ...styles.fs16,
                      flex: 6,
                      padding: 10,
                      color: "#371B00",
                      marginLeft: 0,
                      background: "#DEE2E2",
                      borderRadius: "0px 50px 50px 0px",
                    }}
                  >
                    Evedence presentation
                  </div>
                </div>

                {isOpen ? (
                  <Fade bottom>
                    <div
                      style={{
                        ...styles.pillDarkGreen,
                        display: "flex",
                        // ...stylesAnimate.zoomIn,
                      }}
                    >
                      <div
                        style={
                          past ? styles.lightGreenPillPast : styles.hardGrayPill
                        }
                      >
                        <strong
                          style={styles.fs18}
                          className={
                            past ? "brown whiteSpace" : "brown whiteSpace"
                          }
                        >
                          22 Jun, 2020
                        </strong>
                      </div>
                      <div
                        className="lg black"
                        style={{
                          ...styles.fs16,
                          flex: 6,
                          padding: 10,
                          color: "#371B00",
                          marginLeft: 0,
                          // background: "#7B7D7D",
                          borderRadius: "0px 50px 50px 0px",
                        }}
                      >
                        Evedence presentation
                      </div>
                    </div>
                  </Fade>
                ) : null}
              </div>
            </div>
          </div>

          <div className="flex-container justify-content-center pointer">
            {isOpen ? (
              <Icon name="angle up" size="large" onClick={this.handleClick} />
            ) : (
              <Icon name="angle down" size="large" onClick={this.handleClick} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  pillDarkGreen: {
    borderRadius: 50,
    marginTop: 8,
    color: "#fff",
    width: "100%",
    display: "flex",
  },
  fs18: {
    fontSize: 14,
  },
  fs16: {
    fontSize: 14,
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
    flex: 0.7,
    padding: 10,
    textAlign: "center",
    borderRadius: "50px 0px 0px 50px",
    color: "#000",
    // border: "1px solid #038ED9",
    background: "#e3e3e3",
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
  lightGrayPill: {},

  iconCenter: {
    display: "flex",
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

export default CaseDiaryListItem;
