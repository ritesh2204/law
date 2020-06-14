import React from "react";
import { Image } from "semantic-ui-react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { Calendar } from "react-date-range";

class CalendarWidget extends React.Component {
  handleSelect(date) {
    console.log(date); // native Date object
  }
  render() {
    return (
      <div className="right-sidenav">
        {/* <img src="/images/calendar.png" alt="calendar" /> */}
        <h3 className="d-flex" style={{ marginTop: 130 }}>
          January, 2020
        </h3>

        <Calendar date={new Date()} onChange={this.handleSelect} />
        <div className="panel">
          <div className="panel-container">
            <div>
              <Image
                src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
                aly="dds"
                className="panelavatar"
                circular
              />
            </div>
            <div style={{ marginLeft: 20 }}>
              <p
                style={{ fontSize: 16, color: "#2D6465", fontWeight: "bold" }}
                className="mb-0"
              >
                Award show discussion
              </p>
              <p style={{ fontWeight: "bold", color: "#7D7D7D" }}>
                09:00 AM - 10:00 AM
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CalendarWidget;
