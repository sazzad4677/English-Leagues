import React from "react";
import { Navbar } from "react-bootstrap";
import "./Header.css";
import image from "../../images/header-stadium.jpg"

const Header = () => {
  return (
    <Navbar className="navbar">
      <img
        src={image}
        alt="Cinque Terre"
        width="1000"
        height="300"
      />
      <div className="team-name">Sports Mania</div>
    </Navbar>
  );
};

export default Header;
