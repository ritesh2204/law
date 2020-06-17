import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const AddButton = (props) => (
  <React.Fragment>
    <div
      className="flex-container space-between"
      style={styles.containerPadding}
    >
      <div>
        <h2 className=" mb-0">{props.name}</h2>
      </div>

      <div>
        <Button
          content="Add"
          primary
          size="small"
          as={Link}
          to={props.path}
          icon="add circle"
          labelPosition="left"
        />
      </div>
    </div>
  </React.Fragment>
);

const styles = {
  containerPadding: {
    padding: "0 24px 0 24px",
  },
};

export default AddButton;
