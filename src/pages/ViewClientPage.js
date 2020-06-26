import React from "react";
import AddButton from "../components/AddButton";
import ClientViewBlock from "../components/ClientViewBlock";
import { Icon, Header, Divider } from "semantic-ui-react";
import ClientList from "../components/ClientList/ClientList";

const UserDetailPage = () => (
  <React.Fragment>
    <ClientList />
  </React.Fragment>
);

export default UserDetailPage;
