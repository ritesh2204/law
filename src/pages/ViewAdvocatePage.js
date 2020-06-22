import React from "react";
import ClientViewBlock from "../components/ClientViewBlock";
import AddButton from "../components/AddButton";

const ViewAdvocatePage = () => (
  <React.Fragment>
    <div className="mt-24">
      <AddButton name="Advocates" path="/addadvocate" />
      <ClientViewBlock
        name="Ashna Chandrakar"
        email="ashna.chandrakar@gmail.com"
        password="123445"
        labelPassword="PASSWORD"
        labelType="TYPE"
        type="admin"
      />
    </div>
  </React.Fragment>
);

export default ViewAdvocatePage;
