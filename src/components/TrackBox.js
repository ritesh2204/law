import React from "react";
import { Icon } from "semantic-ui-react";

const TrackBox = () => {
  return (
    <div className="flex-container" style={{ margin: 8 }}>
      <div className="trackbox">
        <div className="d-flex">
          <Icon name="law" color="gray" size="huge" />
          <div>
            <p className="mb-0 desc">394</p>
            <p style={{ color: "gray" }}>Advocate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackBox;
