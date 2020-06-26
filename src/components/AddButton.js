import React from "react";
import { Icon } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

const AddButton = (props) => {
  console.log(props);
  const { location } = props;
  return (
    <React.Fragment>
      <div
        className="flex-container space-between"
        style={styles.containerPadding}
      >
        <div>
          <h2
          // style={{ borderBottom: "2px solid blue" }}
          >
            {props.name}
          </h2>
          <div className="borderminblue"></div>
        </div>

        <div>
          <Link to={props.path}>
            <Icon
              circular
              style={{
                color: "#fff",
                background: "#186666",
              }}
              size="large"
              name="add circle"
            />
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

const styles = {
  containerPadding: {
    padding: "0 24px 0 24px",
  },
};

export default withRouter(AddButton);
