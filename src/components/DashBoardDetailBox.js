import React from "react";

const DashBoardDetailBox = ({ title, count }) => {
  return (
    <div style={{ marginTop: 16, minWidth: 150 }}>
      <div style={{ color: "gray", fontSize: "1rem" }}>{title}</div>
      <p className="numbers" style={{ marginTop: 8 }}>
        <b style={{ marginLeft: 16, fontSize: "1.6rem" }}>{count}</b>
      </p>
    </div>
  );
};

export default DashBoardDetailBox;
