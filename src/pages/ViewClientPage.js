import React from "react";
import { Container } from "semantic-ui-react";
import AddButton from "../components/AddButton";
import ClientViewBlock from "../components/ClientViewBlock";

const UserDetailPage = () => (
  <React.Fragment>
    <div className="mt-24">
      <AddButton name="Client details" path="/addclients" />
      <ClientViewBlock
        name="Ashna Chandrakar"
        email="ashna.chandraker@gmail.com"
        mobile="+91-8844554455"
        labelMobile="MOBILE"
        labelAddress="ADDRESS"
        Address="Raipur (C.G)"
      />
    </div>
  </React.Fragment>
);

export default UserDetailPage;
