import React from "react";
import { Button, Form, Input, Dropdown, Icon } from "semantic-ui-react";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

const UserProfileForm = () => (
  <React.Fragment>
    <div className="p-30">
      <h2>Add Advocates</h2>
      <div className="bordermin"></div>

      <br />
      <Form unstackable>
        <Form.Group widths="equal">
          <Form.Field>
            <label>Name</label>
            <Input size="large" placeholder="Enter Name." />
          </Form.Field>

          <Form.Field>
            <label>Email</label>
            <Input size="large" placeholder="Enter email" />
          </Form.Field>
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Field>
            <label>Password</label>
            <Input size="large" type="password" placeholder="Enter password" />
          </Form.Field>

          <Form.Field>
            <label>Designation</label>
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
            CONTINUE &nbsp;
            <Icon name="arrow right" />
          </Button>
        </div>
      </Form>
    </div>
  </React.Fragment>
);

export default UserProfileForm;
