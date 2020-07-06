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

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

class CaseDetail extends Component {
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
    const { isEditable } = this.state;

    return (
      <React.Fragment>
        <Form>
          <div style={styles.tableContainer}>
            <Segment>
              <Table celled striped>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell colSpan="5">
                      Case Detail
                      <Icon
                        name="pencil alternate"
                        size="large"
                        onClick={this.handleEditable}
                        style={{
                          cursor: "pointer",
                          float: "right",
                        }}
                      />
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell collapsing>Select Client</Table.Cell>
                    <Table.Cell colSpan="2">
                      {isEditable ? (
                        <Dropdown
                          placeholder="Select Client"
                          fluid
                          selection
                          multiple
                          options={options}
                        />
                      ) : (
                        <span>Mahesh Babu</span>
                      )}
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing>Case Name</Table.Cell>
                    <Table.Cell>
                      {isEditable ? (
                        <Dropdown
                          placeholder="Select Case Type"
                          fluid
                          selection
                          multiple
                          options={options}
                          size="large"
                        />
                      ) : (
                        <span>Medical case</span>
                      )}
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing> Stage</Table.Cell>
                    <Table.Cell>
                      {isEditable ? (
                        <Dropdown
                          placeholder="Select Stage"
                          fluid
                          selection
                          options={options}
                          size="large"
                        />
                      ) : (
                        <span>On going</span>
                      )}
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell collapsing> Court Type</Table.Cell>
                    <Table.Cell>
                      {isEditable ? (
                        <Dropdown
                          placeholder="Select Court Type"
                          fluid
                          selection
                          options={options}
                        />
                      ) : (
                        <span>High court</span>
                      )}
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell collapsing>Court Location</Table.Cell>
                    <Table.Cell>
                      {isEditable ? (
                        <Input placeholder="Enter Case Location." fluid />
                      ) : (
                        <span>lorem ipsum</span>
                      )}
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell collapsing>
                      Notice <span className="red">*</span>
                    </Table.Cell>
                    <Table.Cell>
                      {isEditable ? (
                        <Dropdown
                          placeholder="Yes / No"
                          fluid
                          selection
                          options={[
                            { key: 1, text: "Yes", value: "yes" },
                            { key: 2, text: "No", value: "no" },
                          ]}
                          size="large"
                        />
                      ) : (
                        <span>lorem ipsum</span>
                      )}
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell collapsing>
                      Select Advocates <span className="red">*</span>{" "}
                      <span className="red">*</span>
                    </Table.Cell>
                    <Table.Cell>
                      {isEditable ? (
                        <Dropdown
                          placeholder="Yes / No"
                          fluid
                          selection
                          options={[
                            { key: 1, text: "Yes", value: "yes" },
                            { key: 2, text: "No", value: "no" },
                          ]}
                          size="large"
                        />
                      ) : (
                        <span>lorem ipsum</span>
                      )}
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell collapsing>
                      Court Rooms <span className="red">*</span>
                    </Table.Cell>
                    <Table.Cell>
                      {isEditable ? (
                        <Input size="large" placeholder="Enter Court Rooms." />
                      ) : (
                        <span>lorem ipsum</span>
                      )}
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell collapsing>
                      Notes <span className="red">*</span>
                    </Table.Cell>
                    <Table.Cell>
                      {isEditable ? (
                        <TextArea
                          size="large"
                          fluid
                          rows="2"
                          placeholder="Enter Notes"
                        />
                      ) : (
                        <span>lorem ipsum</span>
                      )}
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell collapsing>
                      Praying<span className="red">*</span>
                    </Table.Cell>
                    <Table.Cell>
                      {isEditable ? (
                        <TextArea
                          size="large"
                          fluid
                          rows="2"
                          placeholder="Enter Notes"
                        />
                      ) : (
                        <span>lorem ipsum</span>
                      )}
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>

              {isEditable ? (
                <div className="flex-container justify-content-center ">
                  <Button className="greenbg textwhite letterspace" size="big">
                    UPDATE &nbsp;
                    <Icon name="arrow right" />
                  </Button>
                </div>
              ) : null}
            </Segment>
          </div>
        </Form>
      </React.Fragment>
    );
  }
}

const styles = {
  tableContainer: {
    padding: "20px 20px 0px 20px",
    margin: "auto",
  },
};

export default CaseDetail;
