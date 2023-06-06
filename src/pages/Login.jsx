import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { errorToast } from "../components/AlertTimer";
import { ToastContainer } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://dummyjson.com/auth/login", {
        username: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        alert(`Welcome back ${res.data.firstName} ${res.data.lastName}`);
      })
      .catch(() => {
        errorToast("Username or Password is Wrong");
      });
  };

  return (
    <Container className="login">
      <Row className="text-center">
        <h2 className="my-heding">Hello Again!</h2>
        <h4>To login enter Your email address and password</h4>
      </Row>
      <form onSubmit={handleSubmit}>
        <h4>Welcome Back You’ve Been Missed!</h4>
        <div className="mail">
          <label htmlFor="email">Username</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            required
          />
        </div>
        <div className="pass">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
          <div className="text-center mt-5">
            <button className="my-btn" type="submit">
              Login
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </Container>
  );
}
