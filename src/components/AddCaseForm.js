import React from "react";
import {
  Button,
  Form,
  Input,
  Dropdown,
  TextArea,
  Icon,
} from "semantic-ui-react";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

class AddCaseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // const { value } = this.state;
    return (
      <React.Fragment>
        <div className="p-30">
          <h2 className="mb-2">Add Case</h2>
          <div className="bordermin"></div>
          <br />
          <Form unstackable>
            <Form.Field>
              <label>
                Select Client <span className="red">*</span>
              </label>
              <Dropdown
                placeholder="Select Client"
                fluid
                selection
                multiple
                options={options}
              />
            </Form.Field>

            <Form.Field>
              <label>
                Case Name <span className="red">*</span>
              </label>
              <Input placeholder="Enter Case Name." fluid />
            </Form.Field>

            <Form.Field>
              <label>
                Case Type <span className="red">*</span>
              </label>
              <Dropdown
                placeholder="Select Case Type"
                fluid
                selection
                multiple
                options={options}
                size="large"
              />
            </Form.Field>
            <Form.Group>
              <Form.Field width={3}>
                <label>
                  Stage <span className="red">*</span>
                </label>
                <Dropdown
                  placeholder="Select Stage"
                  fluid
                  selection
                  options={options}
                  size="large"
                />
              </Form.Field>
              <Form.Field width={3}>
                <label>
                  Court Type <span className="red">*</span>
                </label>
                <Dropdown
                  placeholder="Select Court Type"
                  fluid
                  selection
                  options={options}
                />
              </Form.Field>

              <Form.Field width={10}>
                <label>
                  Court Location <span className="red">*</span>
                </label>
                <Input placeholder="Enter Case Location." fluid />
              </Form.Field>
            </Form.Group>

            <Form.Group>
              <Form.Field width={4}>
                <label>
                  Notice <span className="red">*</span>
                </label>
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
              </Form.Field>
              <Form.Field width={12}>
                <label>
                  Select Advocates <span className="red">*</span>
                </label>
                <Dropdown
                  placeholder="Select Advocates"
                  fluid
                  selection
                  multiple
                  options={options}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field width={4}>
                <label>
                  Court Rooms <span className="red">*</span>
                </label>
                <Input size="large" placeholder="Enter Court Rooms." />
              </Form.Field>
              <Form.Field width={12}>
                <label>
                  Case Section and Bare Act <span className="red">*</span>
                </label>
                <Input size="large" placeholder="Case Section and Bare Act" />
              </Form.Field>
            </Form.Group>

            <Form.Field>
              <label>
                Notes <span className="red">*</span>
              </label>
              <TextArea size="large" fluid rows="2" placeholder="Enter Notes" />
            </Form.Field>

            <Form.Field>
              <label>
                Praying <span className="red">*</span>
              </label>
              <TextArea size="large" rows="2" placeholder="..." />
            </Form.Field>

            <div className="flex-container justify-content-center ">
              <Button className="graybg textwhite letterspace" size="big">
                RESET
              </Button>
              <Button className="greenbg textwhite letterspace" size="big">
                ADD &nbsp;
                <Icon name="arrow right" />
              </Button>
            </div>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

export default AddCaseForm;
