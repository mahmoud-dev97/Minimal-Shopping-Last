import React from "react";
import logo from "../assets/images/header-logo-group.png";
import { HiUser } from "react-icons/hi";
import { IoMdHeart } from "react-icons/io";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function NavBar() {
  const favArr = useSelector((state) => state.products.favArr);
  return (
    <div className="nav-bar d-flex justify-content-between align-items-center px-4">
      <Link to="/">
        <img src={logo} alt="logo" className="logo img-fluid" />
      </Link>
      <div className="d-flex justify-content-between" style={{ width: "80px" }}>
        <Link to="/favourites" className="fav">
          <IoMdHeart className="login-icon" />
          <Badge bg="danger">{favArr.length}</Badge>
        </Link>
        <Link to="/login">
          <HiUser className="login-icon" />
        </Link>
      </div>
    </div>
  );
}
