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

const ClientDetailForm = (props) => (
  <React.Fragment>
    <div className="p-30">
      <h2 className="mb-2">
        {props.location.pathname === "/updateclient"
          ? "Update Client"
          : "Add Client"}
      </h2>

      <div className="bordermin"></div>

      <br />
      <Form unstackable>
        <Form.Group widths="equal">
          <Form.Field>
            <label>Name</label>
            <Input size="large" placeholder="Enter Name." />
          </Form.Field>

          <Form.Field>
            <label>Mobile No.</label>
            <Input size="large" placeholder="Enter Mobile No." />
          </Form.Field>

          <Form.Field>
            <label>Father Name</label>
            <Input size="large" placeholder="Enter Father Name" />
          </Form.Field>
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Field>
            <label>Email</label>
            <Input size="large" placeholder="Enter your email" />
          </Form.Field>
          <Form.Field>
            <label>State</label>
            <Dropdown
              placeholder="Select State"
              fluid
              selection
              options={options}
              size="large"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <Input size="large" placeholder="Enter City" />
          </Form.Field>
        </Form.Group>

        <Form.Field>
          <label>Address</label>
          <TextArea size="large" placeholder="Enter Address" />
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

export default withRouter(ClientDetailForm);
