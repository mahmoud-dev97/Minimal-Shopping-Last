import { Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <div className="loading">
      <Spinner
        style={{ width: "300px", height: "300px" }}
        animation="grow"
        variant="secondary"
        className="text-center"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
