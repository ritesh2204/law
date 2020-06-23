import React from "react";
import AddButton from "../components/AddButton";
import ClientViewBlock from "../components/ClientViewBlock";

const UserDetailPage = () => (
  <React.Fragment>
    <div className="mt-24">
      <AddButton name="Clients" bg="#228dd8" path="/addclients" />
      <ClientViewBlock
        bgcolorblue={true}
        name="Sanjay Mahajan"
        email="sanjaymahajan90@gmail.com"
        mobile="+91-8844554455"
        labelMobile="MOBILE"
        labelAddress="ADDRESS"
        Address="Mungeli, Raipur (C.G)"
      />
    </div>
  </React.Fragment>
);

export default UserDetailPage;
