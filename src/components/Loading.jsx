import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loading() {
  const loadingStyle = {
    height: "500px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={loadingStyle}>
      <Spinner
        style={{ width: "300px", height: "300px" }}
        animation="border"
        variant="primary"
        className="text-center"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
