import React, { Component } from "react";
import { Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

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
    const { past } = this.props;
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
              <p className="lightgreen f-24 mb-2">
                <b className={past ? "darkgray" : "bold-green"}>
                  {" "}
                  <Link to="/updatecase">
                    rajat jain vs state of chhattisgarh bilaspur (281929)
                    <span className={past ? "draftpill" : "ongoingpill"}>
                      {past ? "Draft" : "On Going"}
                    </span>
                  </Link>
                </b>
              </p>
              <p
                className={
                  past ? "lightgray f-16 mb-0" : "lightgreen f-16 mb-0"
                }
              >
                Ashna Chandrakar
              </p>
            </div>
          </div>

          <div className="d-column mt-5 " style={{ flex: 2 }}>
            <div className="mr">
              <div className="flex-container flex-end">
                <div className="pill mr-1">Civil</div>
                <div className="pill  mr-1">Family</div>
                <div className="pillid">#28192</div>
              </div>
            </div>
          </div>

          <div style={{ ...styles.pillDarkGreen, display: "flex" }}>
            <div style={styles.lightGreenPillPast}>
              <strong style={styles.fs18} className="whitespace">
                24 Jun, 2020
              </strong>
            </div>
            <div
              className={past ? "black ml-10 lg" : "white ml-10 darkcyan"}
              style={{
                ...styles.fs16,
                flex: 6,
                padding: 10,
                // color: "#FFF",
                marginLeft: 0,
                // background: "#1D9B9D",
                borderRadius: "0px 50px 50px 0px",
              }}
            >
              Evedence presentation
            </div>
          </div>

          {isOpen ? (
            <div style={{ ...styles.pillDarkGreen, display: "flex" }}>
              <div
                style={past ? styles.lightGreenPillPast : styles.hardGrayPill}
              >
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
                  padding: 10,
                  color: "#371B00         ",
                  marginLeft: 0,
                  // background: "#7B7D7D",
                  borderRadius: "0px 50px 50px 0px",
                }}
              >
                Evedence presentation
              </div>
            </div>
          ) : null}

          {/* <div style={{ display: "flex" }}>
          <div style={{ border: "1px solid red", flex: 1 }}>afkahfka</div>
          <div style={{ border: "1px solid black", flex: 6 }}>asfasf</div>
        </div> */}
          {/* <img
            src="https://image.flaticon.com/icons/svg/892/892498.svg"
            style={{ width: 20, margin: "0.5rem auto", cursor: "pointer" }}
            onClick={this.handleClick}
          /> */}
          <div style={{ margin: "0 auto", cursor: "pointer" }}>
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
