import React from "react";
import { Menu, Input, Icon, Image } from "semantic-ui-react";

const Navbar = () => (
  <div>
    <Menu fixed="top" className="navpadtop navpadbottom navshadow">
      <Menu.Item style={navStyle.logo}>H-care</Menu.Item>

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
          <span className="grey-text">
            Elon Musk &nbsp;
            <Icon name="arrow down" />
          </span>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  </div>
);

const navStyle = {
  logo: {
    paddingLeft: 50,
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 150,
  },
  search: {
    width: "60%",
    borderRadius: "50px",
    color: "gray",
  },
};

export default Navbar;
