import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <div className="loading">
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
