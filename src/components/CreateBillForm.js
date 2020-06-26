import React from "react";
import {
  Header,
  Form,
  Dropdown,
  Table,
  Button,
  Input,
  TextArea,
  Icon,
  //   Message,
  //   Dimmer,
  //   Loader,
} from "semantic-ui-react";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

class CreateBillForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div style={{ padding: "0px 100px" }}>
          <Form>
            <br />
            <h2 className="mb-2">Create Bill</h2>
            <div className="bordermin"></div>

            <br />
            {/* <div hidden={message.length < 1}>
            <Message info>
              <p>{message}</p>
            </Message>
          </div> */}
            <br />
            <Form.Field>
              <label>Select Client</label>
              <Dropdown
                name="clients"
                placeholder="Select Client"
                fluid
                search
                selection
                multiple
                options={options}
                //   onChange={this.handleClientOrAdvocate}
              />
            </Form.Field>
            <Form.Field>
              <label>Select Case</label>
              <Dropdown
                name="case"
                placeholder="Select Case"
                // value={caseId}
                fluid
                search
                selection
                options={options}
                onChange={this.handleCase}
              />
            </Form.Field>
            <Form.Field>
              <label>Select Advocates</label>
              <Dropdown
                name="advocates"
                placeholder="Select Advocates"
                fluid
                search
                selection
                multiple
                // value={advocatesValue}
                options={options}
                //   onChange={this.handleClientOrAdvocate}
              />
            </Form.Field>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Sr. No.</Table.HeaderCell>
                  <Table.HeaderCell>Particulars</Table.HeaderCell>
                  <Table.HeaderCell>Amount</Table.HeaderCell>
                  <Table.HeaderCell>Remove</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell
                    textAlign="center"
                    style={{
                      color: "#787979",
                    }}
                  >
                    Sr.
                  </Table.Cell>
                  <Table.Cell width="10">
                    <Input
                      fluid
                      placeholder="Particular"
                      type="text"
                      name="particular"
                      // value={prt.particular}
                      // onChange={e => this.handleChangeParticular(e, i)}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <Input
                      fluid
                      placeholder="Amount"
                      type="number"
                      name="amount"
                      // value={prt.amount}
                      // onChange={e => this.handleChangeParticular(e, i)}
                    />
                  </Table.Cell>
                  <Table.Cell textAlign="center">
                    <Button
                      type="button"
                      icon="trash"
                      //   onClick={() => this.handleRemoveParticular(prt.sn)}
                    />
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell></Table.Cell>
                  <Table.Cell textAlign="right" className="tabelcellcolor">
                    Total
                  </Table.Cell>
                  <Table.Cell className="tabelcellcolor">50</Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
              </Table.Body>
              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan="4">
                    <Button
                      type="button"
                      icon="plus"

                      //   onClick={this.addParticulars}
                    />
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>

            <div style={{ display: "flex" }}>
              <label className="tabelcellcolor">Note</label>
            </div>
            <Form.Group>
              <Form.Field width={16}>
                <TextArea
                  style={{ marginBottom: 10 }}
                  placeholder="Add Notes"
                  type="text"
                  name="note"
                  //   value={note.note}
                  //   onChange={e => this.handleChangeNotes(e, i)}
                />
              </Form.Field>

              <Form.Field>
                <Button
                  type="button"
                  icon="trash"
                  style={{ height: 50 }}

                  // onClick={() => this.handleRemoveNote(note.sn)}
                />
              </Form.Field>
            </Form.Group>
            <Button icon="plus" onClick={this.addNotes} type="button" />
            <div className="flex-container justify-content-center ">
              <Button className="graybg textwhite letterspace" size="big">
                Reset
              </Button>
              <Button className="greenbg textwhite letterspace" size="big">
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

export default CreateBillForm;
