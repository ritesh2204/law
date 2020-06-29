import React from "react";
import {
  Form,
  Input,
  Dropdown,
  TextArea,
  Icon,
  Table,
  Button,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

class ClientUpdatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ritesh",
      mobile: "884455555",
      father: "kljlj",
      email: "aasdwsgwg@gmail.com",
      state: "chhattisgarh",
      city: "bhilai",
      address: "ejfljflfjfq",
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
    const {
      name,
      mobile,
      father,
      email,
      state,
      city,
      address,
      isEditable,
    } = this.state;
    return (
      <React.Fragment>
        <div style={styles.tableContainer}>
          <Form>
            <Table celled striped style={styles.tableShadow}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan="5">
                    Update Clients
                    <Link to="/updateclient">
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
                  <Table.Cell collapsing>Mobile No</Table.Cell>
                  <Table.Cell>
                    {isEditable ? (
                      <Input
                        size="small"
                        name="mobile"
                        value={mobile}
                        fluid
                        onChange={this.handleChange}
                        placeholder="Enter Mobile."
                      />
                    ) : (
                      <span>{mobile}</span>
                    )}
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell collapsing>Father Name</Table.Cell>
                  <Table.Cell>
                    {isEditable ? (
                      <Input
                        size="small"
                        name="father"
                        placeholder="Enter Father Name"
                        value={father}
                        fluid
                        onChange={this.handleChange}
                      />
                    ) : (
                      <span>{father}</span>
                    )}
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell collapsing>Email</Table.Cell>
                  <Table.Cell>
                    {isEditable ? (
                      <Input
                        size="small"
                        value={email}
                        fluid
                        onChange={this.handleChange}
                        placeholder="Enter your email"
                      />
                    ) : (
                      <span>{email}</span>
                    )}
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell collapsing>State</Table.Cell>
                  <Table.Cell>
                    {isEditable ? (
                      <Dropdown
                        placeholder="Select State"
                        fluid
                        name="state"
                        value={state}
                        onChange={this.handleChange}
                        selection
                        options={options}
                        size="small"
                      />
                    ) : (
                      <span> {state}</span>
                    )}
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell collapsing>City</Table.Cell>
                  <Table.Cell>
                    {isEditable ? (
                      <Input
                        size="small"
                        name="city"
                        value={city}
                        fluid
                        onChange={this.handleChange}
                        placeholder="Enter City"
                      />
                    ) : (
                      <span>{city}</span>
                    )}
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell collapsing>Address</Table.Cell>
                  <Table.Cell>
                    {isEditable ? (
                      <TextArea
                        size="small"
                        name="address"
                        onChange={this.handleChange}
                        colSpan="5"
                        placeholder="Enter Address"
                      />
                    ) : (
                      <span>{address}</span>
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
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

const styles = {
  tableContainer: {
    padding: "10px 20px 0px 20px",
    margin: "auto",
  },
  tableShadow: {
    boxShadow: "0 0.5rem 1.5rem rgba(3, 142, 217, 0.14)",
  },
};
export default ClientUpdatePage;
