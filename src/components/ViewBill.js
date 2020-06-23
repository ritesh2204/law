import React from "react";
import { Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ViewBill = () => (
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
              <b className="bold-green">Gajendra verma</b> &nbsp;
              <Link to="/editbill">
                <Icon name="edit" className="editIcon" circular size="small" />
              </Link>
              <Icon
                name="delete"
                style={{ color: "#fff", background: "red" }}
                circular
                size="small"
              />
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
              <Icon name="inr" />
              885688
            </p>
            <p className="mb-0 lightgreen f-24">
              <Icon name="calendar alternate outline" />
              11 jun,2020
            </p>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

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
  },
};

export default ViewBill;
