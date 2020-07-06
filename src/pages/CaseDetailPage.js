import React, { Component } from "react";

import CaseDiaryListItem from "../components/CaseDiaryListItem";
import NextHearing from "../components/NextHearing/NextHearing";
import CaseDetail from "../components/CaseDetail/CaseDetail";

class CaseDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleEditable = () => {
    this.setState((prevState) => ({
      isEditable: !prevState.isEditable,
    }));
  };

  onEditable = () => {
    this.setState((prevState) => ({
      isEditable: !prevState.isEditable,
    }));
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <NextHearing />
          <CaseDetail />
          <br />

          {/* case diary component */}

          <div style={{ marginLeft: 40 }}>
            <h2 className="mb-0">Case Diary</h2>
            <div className="bordermin"></div>
          </div>

          <CaseDiaryListItem open={true} />
        </div>
      </React.Fragment>
    );
  }
}

export default CaseDetailPage;
