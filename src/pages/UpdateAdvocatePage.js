import React, { Component } from "react";

class UpdateAdvocatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ritesh",
      email: "rvritesh11@gmail.com",
      password: "234242",
      type: "admin",
      isEditable: true,
    };
  }
  render() {
    const { name, email, password, type, isEditable } = this.state;
    return (
      <div>
        <Form unstackable>
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
              <Input size="large" placeholder="Enter email" />
            </Form.Field>
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field>
              <label>Password</label>
              <Input
                size="large"
                type="password"
                placeholder="Enter password"
              />
            </Form.Field>

            <Form.Field>
              <label>Type</label>
              <Dropdown
                placeholder="Select Designation"
                fluid
                selection
                options={options}
                size="large"
              />
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
