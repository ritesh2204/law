import React from "react";
import { Input, Form, TextArea, Button, Icon } from "semantic-ui-react";
import CaseDiaryListItem from "../components/CaseDiaryListItem";

const NextHearingPage = () => {
  return (
    <div className="ml-32">
      <h2 className="mt-24">Add Next Hearing</h2>
      <div className="bordermin"></div>
      <Form>
        <Form.Group>
          <Form.Group style={{ display: "flex", flexDirection: "column" }}>
            <Form.Field>
              <label>Select Date</label>
              <Input type="date" value={"2020-06-22"} />
            </Form.Field>

            <Form.Field>
              <label>Add Documents</label>
              <Input type="file" />
            </Form.Field>
          </Form.Group>
          <Form.Field width={12}>
            <label>For</label>
            <TextArea size="large" rows="6" placeholder="Enter Notes" />
          </Form.Field>
        </Form.Group>

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

      <h2>Previous Hearing</h2>
      <div className="bordermin"></div>

      <CaseDiaryListItem />
      <CaseDiaryListItem past={true} />
      <CaseDiaryListItem past={true} />
      <CaseDiaryListItem past={true} />
    </div>
  );
};

export default NextHearingPage;
