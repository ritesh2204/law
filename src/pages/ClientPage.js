import React from "react";
import { Container } from "semantic-ui-react";
import ClientDetailForm from "../components/ClientDetailForm";

const Form = () => (
  <React.Fragment>
    <div>
      <Container>
        <ClientDetailForm />
      </Container>
    </div>
  </React.Fragment>
);

export default Form;
