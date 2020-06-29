import React from "react";
import { Input, Form, TextArea, Button, Icon, Table } from "semantic-ui-react";
import CaseDiaryListItem from "../components/CaseDiaryListItem";
import { Link } from "react-router-dom";
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
    const { isEditable } = this.state;
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
          <div style={styles.tableContainer}>
            <Table celled striped style={styles.tableShadow}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan="5">
                    Update Users
                    <Link to="/user_update">
                      <Icon
                        name="pencil alternate"
                        size="large"
                        onClick={this.handleEditable}
                        style={{
                          cursor: "pointer",
                          float: "right",
                        }}
                      />
                    </Link>
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
                      <span>{this.state.selectDate}</span>
                    )}
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell collapsing>Add Documents</Table.Cell>
                  <Table.Cell>
                    {isEditable ? (
                      <Input type="file" />
                    ) : (
                      <span>{this.state.addDocuments}</span>
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
                      <span>{this.state.message}</span>
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
          </div>
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

const styles = {
  tableContainer: {
    padding: "20px 20px 0px 20px",
    margin: "auto",
  },
  tableShadow: {
    boxShadow: "0 0.5rem 1.5rem rgba(3, 142, 217, 0.14)",
  },
};

export default NextHearingPage;
