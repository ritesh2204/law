import React from "react";
import { Input, Form, TextArea, Button, Icon } from "semantic-ui-react";
import CaseDiaryListItem from "../components/CaseDiaryListItem";

class NextHearingPage extends React.Component {
  state = {
    isEditable: false,
    selectDate: "22/06/2020",
    addDocuments: "image",
    message: "some text here",
  };

  handleEditable = () => {
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
    const { isEditable, selectDate, addDocuments, message } = this.state;
    return (
      <div className="ml-32 mt-30">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            {" "}
            <h2 className="mb-2">Add Next Hearing</h2>
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

        <h2>Previous Hearing</h2>
        <div className="bordermin"></div>

        <CaseDiaryListItem />
        <CaseDiaryListItem past={true} />
        <CaseDiaryListItem past={true} />
        <CaseDiaryListItem past={true} />
      </div>
    );
  }
}

export default NextHearingPage;
