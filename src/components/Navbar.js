import React from "react";
import { Menu, Input, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div>
    <Menu
      fixed="top"
      className="navshadow"
      style={{ padding: "5px 0px 5px 0px" }}
    >
      <Menu.Item style={navStyle.logo}>
        <Link to="/">Thakuar & Thakuar</Link>
      </Menu.Item>

      <Input
        icon="search"
        iconPosition="left"
        placeholder="Search users..."
        style={navStyle.search}
      />

      <Menu.Menu position="right">
        <Menu.Item>
          <Icon
            name="bell"
            className="grey-text"
            size="large"
            style={{
              marginRight: 18,
            }}
          />
          <Image
            src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
            className="avatar"
            circular
          />
        </Menu.Item>

        <Menu.Item>
          <span className="grey-text">Elon Musk &nbsp;</span>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  </div>
);

const navStyle = {
  logo: {
    paddingLeft: 32,
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 59,
  },
  search: {
    width: "66.6%",
    borderRadius: "50px",
    color: "gray",
  },
};

export default Navbar;
