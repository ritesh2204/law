import React, { Component } from "react";
import { Form, Table, Dropdown, Input, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class UpdateAdvocatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ritesh",
      email: "rvritesh11@gmail.com",
      password: "234242",
      type: "admin",
      isEditable: false,
    };
  }

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
    const { name, email, password, type, isEditable } = this.state;
    return (
      <React.Fragment>
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
                  <Table.Cell collapsing>Name</Table.Cell>
                  <Table.Cell colSpan="2">
                    {isEditable ? (
                      <Input
                        size="small"
                        name="name"
                        value={name}
                        fluid
                        onChange={this.handleChange}
                        placeholder="Enter Name."
                      />
                    ) : (
                      <span> {name}</span>
                    )}
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell collapsing>Email</Table.Cell>
                  <Table.Cell>
                    {isEditable ? (
                      <Input
                        size="small"
                        name="mobile"
                        value={email}
                        fluid
                        onChange={this.handleChange}
                        placeholder="Enter Mobile."
                      />
                    ) : (
                      <span>{email}</span>
                    )}
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell collapsing>Password</Table.Cell>
                  <Table.Cell>
                    {isEditable ? (
                      <Input
                        size="small"
                        name="father"
                        placeholder="Enter Father Name"
                        value={password}
                        fluid
                        onChange={this.handleChange}
                      />
                    ) : (
                      <span>{password}</span>
                    )}
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell collapsing>Type</Table.Cell>
                  <Table.Cell>
                    {isEditable ? (
                      <Dropdown
                        placeholder="Select Designation"
                        fluid
                        name="type"
                        selection
                        // options={options}
                        size="large"
                      />
                    ) : (
                      <span>{type}</span>
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

export default UpdateAdvocatePage;
