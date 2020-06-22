import React from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Calendar } from "react-date-range";
import TrackBox from "./TrackBox";

class CalendarWidget extends React.Component {
  handleSelect(date) {
    console.log(date); // native Date object
  }
  render() {
    return (
      <div className="right-sidenav">
        <div className="text-left " style={styles.calendarDate}>
          <b>January 21</b>, <span style={{ color: "gray" }}>Tuesday</span>
        </div>
        <div className="flex-container">
          <Calendar date={new Date()} onChange={this.handleSelect} />
        </div>
        {/* <div style={styles.panelContainer}>
          <TrackBox />
          <TrackBox />
          <TrackBox />
          <TrackBox />
        </div> */}
      </div>
    );
  }
}

export default CalendarWidget;

const styles = {
  calendarDate: {
    textAlign: "left",
    margin: "20px 0 0 10px",
    fontSize: "1.5rem",
  },
  panelContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};
