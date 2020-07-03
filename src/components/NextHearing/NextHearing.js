import React, { Component } from "react";
import {
  Button,
  Form,
  Input,
  TextArea,
  Icon,
  Table,
  Segment,
} from "semantic-ui-react";

class NextHearing extends Component {
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
                      Next Hearing
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
                    <Table.Cell collapsing>Date</Table.Cell>
                    <Table.Cell colSpan="2">
                      {isEditable ? (
                        <Input type="date" value={"2020-06-22"} />
                      ) : (
                        <span>22/5/2020</span>
                      )}
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing>Add Documents</Table.Cell>
                    <Table.Cell>
                      {isEditable ? (
                        <Input type="file" />
                      ) : (
                        <span>image.jpg</span>
                      )}
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell collapsing>For</Table.Cell>
                    <Table.Cell>
                      {isEditable ? (
                        <TextArea
                          size="large"
                          rows="6"
                          placeholder="Enter Notes"
                        />
                      ) : (
                        <span>For xyz particular</span>
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

export default NextHearing;
