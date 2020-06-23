import React from "react";
import {
  Button,
  Form,
  Input,
  Dropdown,
  TextArea,
  Icon,
} from "semantic-ui-react";
import { withRouter } from "react-router-dom";

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
        <div className="p-30">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              {" "}
              <h2 className="mb-2">Update Client</h2>
            </div>
            <div>
              <button onClick={this.handleEditable}>Edit</button>
            </div>
          </div>

          <div className="bordermin"></div>
          <br />
          <Form unstackable>
            <Form.Group widths="equal">
              <Form.Field>
                <label>Name</label>

                {isEditable ? (
                  <Input
                    size="large"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    placeholder="Enter Name."
                  />
                ) : (
                  <p style={{ fontSize: 24 }}>{this.state.name}</p>
                )}
              </Form.Field>

              <Form.Field>
                <label>Mobile No.</label>
                {isEditable ? (
                  <Input
                    size="large"
                    name="mobile"
                    value={mobile}
                    onChange={this.handleChange}
                    placeholder="Enter Name."
                  />
                ) : (
                  <p style={{ fontSize: 24 }}>{this.state.mobile}</p>
                )}
              </Form.Field>

              <Form.Field>
                <label>Father Name</label>
                {isEditable ? (
                  <Input
                    size="large"
                    name="father"
                    placeholder="Enter Father Name"
                    value={father}
                    onChange={this.handleChange}
                  />
                ) : (
                  <p style={{ fontSize: 24 }}>{this.state.father}</p>
                )}
              </Form.Field>
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Field>
                <label>Email</label>
                {isEditable ? (
                  <Input
                    size="large"
                    value={email}
                    onChange={this.handleChange}
                    placeholder="Enter your email"
                  />
                ) : (
                  <p style={{ fontSize: 24 }}>{this.state.email}</p>
                )}
              </Form.Field>
              <Form.Field>
                <label>State</label>
                {isEditable ? (
                  <Dropdown
                    placeholder="Select State"
                    fluid
                    name="state"
                    value={state}
                    onChange={this.handleChange}
                    selection
                    options={options}
                    size="large"
                  />
                ) : (
                  <p style={{ fontSize: 24 }}>{this.state.state}</p>
                )}
              </Form.Field>
              <Form.Field>
                <label>City</label>

                {isEditable ? (
                  <Input
                    size="large"
                    name="city"
                    value={city}
                    onChange={this.handleChange}
                    placeholder="Enter City"
                  />
                ) : (
                  <p style={{ fontSize: 24 }}>{this.state.city}</p>
                )}
              </Form.Field>
            </Form.Group>

            <Form.Field>
              <label>Address</label>
              {isEditable ? (
                <TextArea
                  size="large"
                  name="address"
                  onChange={this.handleChange}
                  placeholder="Enter Address"
                />
              ) : (
                <p style={{ fontSize: 24 }}>{this.state.address}</p>
              )}
            </Form.Field>
            <div className="flex-container justify-content-center ">
              <Button className="graybg textwhite letterspace" size="big">
                RESET
              </Button>
              <Button className="greenbg textwhite letterspace" size="big">
                SUBMIT &nbsp;
                <Icon name="arrow right" />
              </Button>
            </div>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

export default ClientUpdatePage;
