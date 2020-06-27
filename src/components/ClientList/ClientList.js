import React from "react";
import ClientListItem from "./ClientListItem";
import { Divider, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import AddButton from "../AddButton/AddButton";

const ClientList = () => {
  return (
    <React.Fragment>
      <AddButton path="/addclients" title="Client Details" />
      <ClientListItem />
    </React.Fragment>
  );
};

export default ClientList;
