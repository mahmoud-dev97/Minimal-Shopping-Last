import React from "react";
import leftImg from "../assets/images/image 1.png";
import rightImg from "../assets/images/image 2.png";

export default function Header() {
  return (
    <header className="d-flex justify-content-center justify-content-lg-between align-items-center">
      <img src={rightImg} alt="left-img" className="d-none d-lg-block"/>
      <h2>
        Get 50% Off on <br /> Selected categories
      </h2>
      <img src={leftImg} alt="left-img" className="d-none d-lg-block"/>
    </header>
  );
}
