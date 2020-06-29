import React, { Component } from "react";
import {
  Button,
  Form,
  Input,
  Dropdown,
  TextArea,
  Icon,
  Table,
  Segment,
} from "semantic-ui-react";
import CaseDiaryListItem from "../components/CaseDiaryListItem";
import { Link } from "react-router-dom";
import NextHearing from "../components/NextHearing/NextHearing";
import CaseDetail from "../components/CaseDetail/CaseDetail";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

class CaseDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Medical",
      client: "Manish",
      stage: "ccac",
      court: "jhhh",
      advocates: "efefw",
      casetype: "vvww",
      praying: "ddvwv",
      courtroom: "dvwvwv",
      courtlocation: "kmcklmc",
      act: "vsdvs",
      notice: "hkjk",
      notes: "dsvsdvsdvvsdvsdv",
      isEditable: false,
      selectDate: "22/06/2020",
      addDocuments: "image",
      message: "some text here",
    };
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
    const {
      isEditable,
      name,
      client,
      stage,
      court,
      advocates,
      casetype,
      praying,
      courtroom,
      courtlocation,
      notes,
      act,
      notice,
    } = this.state;

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

const styles = {
  tableContainer: {
    padding: "20px 20px 0px 20px",
    margin: "auto",
  },
  tableShadow: {
    boxShadow: "0 0.5rem 1.5rem rgba(3, 142, 217, 0.14)",
  },
};

export default CaseDetailPage;
