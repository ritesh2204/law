import React, { Component } from "react";
import {
  Button,
  Form,
  Input,
  Dropdown,
  TextArea,
  Icon,
} from "semantic-ui-react";
import CaseDiaryListItem from "../components/CaseDiaryListItem";

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
      selectDate,
      addDocuments,
      message,
    } = this.state;

    return (
      <div>
        <div className="p-30">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              {" "}
              <h2 className="mb-2">Add Next Hearing</h2>
            </div>

            <div>
              <Icon
                name="edit outline"
                size="large"
                // onClick={this.onEditable}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          <div className="bordermin"></div>
          <Form>
            <Form.Group>
              <Form.Group style={{ display: "flex", flexDirection: "column" }}>
                <Form.Field>
                  <label>Select Date</label>
                  {isEditable ? (
                    <Input type="date" value={"2020-06-22"} />
                  ) : (
                    <p style={{ fontSize: 24, width: 300 }}>
                      {this.state.selectDate}
                    </p>
                  )}
                </Form.Field>

                <Form.Field>
                  <label>Add Documents</label>
                  {isEditable ? (
                    <Input type="file" />
                  ) : (
                    <p style={{ fontSize: 24 }}>{this.state.addDocuments}</p>
                  )}
                </Form.Field>
              </Form.Group>
              <Form.Field width={12}>
                <label>For</label>
                {isEditable ? (
                  <TextArea size="large" rows="6" placeholder="Enter Notes" />
                ) : (
                  <p style={{ fontSize: 24 }}>{this.state.message}</p>
                )}
              </Form.Field>
            </Form.Group>

            {isEditable ? (
              <div className="flex-container justify-content-center ">
                <Button className="graybg textwhite letterspace" size="big">
                  RESET
                </Button>
                <Button className="greenbg textwhite letterspace" size="big">
                  SUBMIT &nbsp;
                  <Icon name="arrow right" />
                </Button>
              </div>
            ) : null}
          </Form>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              {" "}
              <h2 className="mb-2">Case Detail</h2>
            </div>
            <div>
              <Icon
                name="edit outline"
                size="large"
                onClick={this.handleEditable}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>

          <div className="bordermin"></div>

          <br />
          <Form unstackable>
            <Form.Group widths="equal">
              <Form.Field>
                <label>
                  Select Client <span className="red">*</span>
                </label>
                {isEditable ? (
                  <Dropdown
                    placeholder="Select Client"
                    fluid
                    name="select-client"
                    selection
                    options={options}
                    size="large"
                    onChange={this.handleChange}
                    value={client}
                  />
                ) : (
                  <p style={{ fontSize: 24 }}>{this.state.client}</p>
                )}
              </Form.Field>
              <Form.Field>
                <label>
                  Case Name <span className="red">*</span>
                </label>
                {isEditable ? (
                  <Input
                    name="name"
                    size="large"
                    placeholder="Enter Name."
                    onChange={this.handleChange}
                    value={name}
                  />
                ) : (
                  <p style={{ fontSize: 24 }}>{this.state.name}</p>
                )}
              </Form.Field>

              <Form.Field>
                <label>
                  Stage <span className="red">*</span>
                </label>
                {isEditable ? (
                  <Dropdown
                    placeholder="Select Client"
                    name="select-stage"
                    fluid
                    selection
                    options={options}
                    size="large"
                    onChange={this.handleChange}
                    value={stage}
                  />
                ) : (
                  <p style={{ fontSize: 24 }}>{this.state.stage}</p>
                )}
              </Form.Field>

              <Form.Field>
                <label>
                  Court Type <span className="red">*</span>
                </label>

                {isEditable ? (
                  <Dropdown
                    placeholder="Select Client"
                    name="select-client"
                    fluid
                    selection
                    options={options}
                    size="large"
                    onChange={this.handleChange}
                    value={court}
                  />
                ) : (
                  <p style={{ fontSize: 24 }}>{this.state.court}</p>
                )}
              </Form.Field>
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Field>
                <label>
                  Select Advocates <span className="red">*</span>
                </label>

                {isEditable ? (
                  <Dropdown
                    placeholder="Select Advocates"
                    fluid
                    name="select-advocates"
                    selection
                    options={options}
                    size="large"
                    onChange={this.handleChange}
                    value={advocates}
                  />
                ) : (
                  <p style={{ fontSize: 24 }}>{this.state.court}</p>
                )}
              </Form.Field>
              <Form.Field>
                <label>
                  Case Type <span className="red">*</span>
                </label>

                {isEditable ? (
                  <Dropdown
                    placeholder="Select-case"
                    fluid
                    selection
                    options={options}
                    size="large"
                    onChange={this.handleChange}
                    value={casetype}
                  />
                ) : (
                  <p style={{ fontSize: 24 }}>{this.state.casetype}</p>
                )}
              </Form.Field>

              <Form.Field>
                <label>
                  Praying <span className="red">*</span>
                </label>

                {isEditable ? (
                  <TextArea
                    size="large"
                    rows="2"
                    placeholder="..."
                    name="praying"
                    onChange={this.handleChange}
                    value={praying}
                  />
                ) : (
                  <p style={{ fontSize: 24 }}>{this.state.praying}</p>
                )}
              </Form.Field>

              <Form.Field>
                <label>
                  Court Rooms <span className="red">*</span>
                </label>

                {isEditable ? (
                  <Input
                    size="large"
                    placeholder="Enter Name."
                    name="court-rooms"
                    onChange={this.handleChange}
                    value={courtroom}
                  />
                ) : (
                  <p style={{ fontSize: 24 }}>{this.state.courtroom}</p>
                )}
              </Form.Field>
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Field>
                <label>
                  Court Location <span className="red">*</span>
                </label>

                {isEditable ? (
                  <Dropdown
                    placeholder="Select Client"
                    fluid
                    name="court-location"
                    selection
                    options={options}
                    size="large"
                    onChange={this.handleChange}
                    value={courtlocation}
                  />
                ) : (
                  <p style={{ fontSize: 24 }}>{this.state.courtlocation}</p>
                )}
              </Form.Field>

              <Form.Field>
                <label>
                  Case Section and Bare Act <span className="red">*</span>
                </label>

                {isEditable ? (
                  <Input
                    size="large"
                    placeholder="Enter Name."
                    name="act"
                    onChange={this.handleChange}
                    value={act}
                  />
                ) : (
                  <p style={{ fontSize: 24 }}>{this.state.act}</p>
                )}
              </Form.Field>

              <Form.Field width={5}>
                <label>
                  Notice <span className="red">*</span>
                </label>

                {isEditable ? (
                  <Dropdown
                    placeholder="Yes / No"
                    fluid
                    name="notice"
                    onChange={this.handleChange}
                    value={notice}
                    selection
                    options={[
                      { key: 1, text: "Yes", value: "yes" },
                      { key: 2, text: "No", value: "no" },
                    ]}
                    size="large"
                  />
                ) : (
                  <p style={{ fontSize: 24 }}>{this.state.notice}</p>
                )}
              </Form.Field>
            </Form.Group>

            <Form.Group>
              <Form.Field width={16}>
                <label>Notes</label>

                {isEditable ? (
                  <TextArea
                    name="notes"
                    size="large"
                    rows="2"
                    placeholder="Enter Notes"
                    onChange={this.handleChange}
                    value={notes}
                  />
                ) : (
                  <p style={{ fontSize: 24 }}>{this.state.notes}</p>
                )}
              </Form.Field>
            </Form.Group>

            {isEditable ? (
              <div className="flex-container justify-content-center ">
                {/* <Button className="graybg textwhite letterspace" size="big">
                  RESET
                </Button> */}
                <Button className="greenbg textwhite letterspace" size="big">
                  UPDATE &nbsp;
                  <Icon name="arrow right" />
                </Button>
              </div>
            ) : null}
          </Form>

          {/* case diary component */}
          <h2>Case Diary</h2>

          <div className="bordermin"></div>
          <CaseDiaryListItem open={true} />
        </div>
      </div>
    );
  }
}

export default CaseDetailPage;
