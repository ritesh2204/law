import React from "react";
import {
  Button,
  Form,
  Input,
  Dropdown,
  TextArea,
  Radio,
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
    const { value } = this.state;
    return (
      <React.Fragment>
        <div className="p-30">
          <h2 className="fontsize-40">Add Case</h2>
          <div className="bordermin"></div>

          <br />
          <Form unstackable>
            <Form.Group widths="equal">
              <Form.Field>
                <label>
                  Select Client <span className="red">*</span>
                </label>
                <Dropdown
                  placeholder="Select Client"
                  fluid
                  selection
                  options={options}
                  size="large"
                />
              </Form.Field>
              <Form.Field>
                <label>
                  Case Name <span className="red">*</span>
                </label>
                <Input size="large" placeholder="Enter Name." />
              </Form.Field>

              <Form.Field>
                <label>
                  Stage <span className="red">*</span>
                </label>
                <Dropdown
                  placeholder="Select Client"
                  fluid
                  selection
                  options={options}
                  size="large"
                />
              </Form.Field>

              <Form.Field>
                <label>
                  Court Type <span className="red">*</span>
                </label>
                <Dropdown
                  placeholder="Select Client"
                  fluid
                  selection
                  options={options}
                  size="large"
                />
              </Form.Field>
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Field>
                <label>
                  Select Advocates <span className="red">*</span>
                </label>
                <Dropdown
                  placeholder="Select Advocates"
                  fluid
                  selection
                  options={options}
                  size="large"
                />
              </Form.Field>
              <Form.Field>
                <label>
                  Case Type <span className="red">*</span>
                </label>
                <Dropdown
                  placeholder="Select Client"
                  fluid
                  selection
                  options={options}
                  size="large"
                />
              </Form.Field>

              <Form.Field>
                <label>
                  Praying <span className="red">*</span>
                </label>
                <TextArea size="large" rows="2" placeholder="..." />
              </Form.Field>

              <Form.Field>
                <label>
                  Court Rooms <span className="red">*</span>
                </label>
                <Input size="large" placeholder="Enter Name." />
              </Form.Field>
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Field>
                <label>
                  Court Location <span className="red">*</span>
                </label>
                <Dropdown
                  placeholder="Select Client"
                  fluid
                  selection
                  options={options}
                  size="large"
                />
              </Form.Field>

              <Form.Field>
                <label>
                  Stage <span className="red">*</span>
                </label>
                <Dropdown
                  placeholder="Select Client"
                  fluid
                  selection
                  options={options}
                  size="large"
                />
              </Form.Field>

              <Form.Field>
                <label>
                  Case Section and Bare Act <span className="red">*</span>
                </label>
                <Input size="large" placeholder="Enter Name." />
              </Form.Field>

              <Form.Field width={5}>
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
            </Form.Group>

            <Form.Group>
              <Form.Field width={16}>
                <TextArea size="large" rows="2" placeholder="Enter Notes" />
              </Form.Field>
            </Form.Group>

            <div className="flex-container justify-content-center ">
              <Button className="graybg textwhite" size="big">
                Reset
              </Button>
              <Button className="greenbg textwhite" size="big">
                Submit &nbsp;
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
