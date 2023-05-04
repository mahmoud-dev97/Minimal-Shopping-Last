import { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";

function AutoCloseAlert(props) {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showAlert && (
        <Alert className="fadeInRightBig" variant={props.variant}>
          {props.message}
        </Alert>
      )}
    </>
  );
}

export default AutoCloseAlert;
