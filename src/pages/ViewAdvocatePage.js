import React from "react";
import ClientViewBlock from "../components/ClientViewBlock";

const ViewAdvocatePage = () => (
  <React.Fragment>
    <ClientViewBlock
      name="Ashna Chandrakar"
      email="ashna.chandrakar@gmail.com"
      password="123445"
      labelPassword="PASSWORD"
      labelType="TYPE"
      type="admin"
    />
  </React.Fragment>
);

export default ViewAdvocatePage;
