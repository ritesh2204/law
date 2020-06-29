import React from "react";
import {
  Form,
  Dropdown,
  Table,
  Button,
  Input,
  TextArea,
} from "semantic-ui-react";

const EditBill = () => (
  <React.Fragment>
    <div style={{ padding: "0px 100px" }}>
      <Form>
        <br />
        <h2>Update Bill</h2>
        <div className="bordermin"></div>
        {/* <br />
          <div hidden={message.length < 1}>
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
            //   value={clientsValue}
            //   options={clientsOptions}
            //   onChange={this.handleClientOrAdvocate}
          />
        </Form.Field>
        <Form.Field>
          <label>Select Case</label>
          <Dropdown
            name="case"
            //   value={caseId}
            placeholder="Select Case"
            fluid
            search
            selection
            //   options={caseOption}
            //   onChange={this.handleCase}
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
            //   value={advocatesValue}
            //   options={advocateOptions}
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
              <Table.Cell textAlign="center">1</Table.Cell>
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
              <Table.Cell>2</Table.Cell>
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
          <div style={{ margin: 5 }} className="tabelcellcolor">
            Note No.
          </div>
          <TextArea
            //   key={i}
            style={{ marginBottom: 10 }}
            placeholder="Add Notes"
            type="text"
            name="note"
            //   value={note.note}
            //   onChange={(e) => this.handleChangeNotes(e, i)}
          />
          <Button
            type="button"
            icon="trash"
            style={{ height: 50 }}
            //   onClick={() => this.handleRemoveNote(note.sn)}
          />
        </div>
        <Button
          icon="plus"
          //   onClick={this.addNotes}
          type="button"
        />
        <div style={{ textAlign: "right" }}>
          <Button primary type="submit" content="update" />
        </div>
      </Form>
    </div>
  </React.Fragment>
);

export default EditBill;
