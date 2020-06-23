import React, { Component } from "react";
import { Form, Input, Dropdown, Button, Icon } from "semantic-ui-react";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

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
      <div className="p-30">
        <Form unstackable>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              {" "}
              <h2>Update Advocate</h2>
              <div className="bordermin"></div>
            </div>
            <div>
              <button onClick={this.handleEditable}>Edit</button>
            </div>
          </div>
          <Form.Group widths="equal">
            <Form.Field>
              <label>Name</label>
              {isEditable ? (
                <Input
                  size="large"
                  name=""
                  value={name}
                  onChange={this.handleChange}
                  placeholder="Enter Name."
                />
              ) : (
                <p style={{ fontSize: 24 }}>{this.state.name}</p>
              )}
            </Form.Field>

            <Form.Field>
              <label>Email</label>

              {isEditable ? (
                <Input
                  size="large"
                  name="email"
                  value={name}
                  onChange={this.handleChange}
                  placeholder="Enter email"
                />
              ) : (
                <p style={{ fontSize: 24 }}>{this.state.email}</p>
              )}
            </Form.Field>
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field>
              <label>Password</label>

              {isEditable ? (
                <Input
                  size="large"
                  type="password"
                  placeholder="Enter password"
                  name={password}
                  onChange={this.handleChange}
                  placeholder="Enter email"
                />
              ) : (
                <p style={{ fontSize: 24 }}>{this.state.password}</p>
              )}
            </Form.Field>

            <Form.Field>
              <label>Type</label>
              {isEditable ? (
                <Dropdown
                  placeholder="Select Type"
                  fluid
                  selection
                  name={type}
                  onChange={this.handleChange}
                  options={options}
                  size="large"
                />
              ) : (
                <p style={{ fontSize: 24 }}>{this.state.type}</p>
              )}
            </Form.Field>
          </Form.Group>
          <br />
          <br />
          <div className="flex-container justify-content-center font-poppins ">
            <Button className="graybg textwhite letterspace " size="big">
              RESET
            </Button>
            <Button className="greenbg textwhite letterspace" size="big">
              ADD &nbsp;
              <Icon name="arrow right" />
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default UpdateAdvocatePage;
