import { Alert, Container, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

// username: "kminchelle",
// password: "0lelplR",

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const handelSubmit = () => {
    axios
      .post("https://dummyjson.com/auth/login", {
        username: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        setErr(false);
        alert(`Welcome back ${res.data.firstName} ${res.data.lastName}`);
      })
      .catch((error) => {
        setErr(true);
      });
  };

  return (
    <Container className="login">
      <Row className="text-center my-5">
        <h2>Hello Again!</h2>
        <h4>To login enter Your email address and password</h4>
      </Row>
      <form onSubmit={(e) => e.preventDefault()}>
        <h4>Welcome Back You’ve Been Missed!</h4>
        <div className="mail">
          <label htmlFor="email">Username</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
        </div>
        <div className="pass">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          {err && <Alert variant="danger">Username or Password is Wrong</Alert>}
          <div className="text-center mt-5">
            <button className="my-btn" type="submit" onClick={handelSubmit}>
              Login
            </button>
          </div>
        </div>
      </form>
    </Container>
  );
}
