import React from "react";
import { Navbar } from "react-bootstrap";
import "./Header.css";
import image from "../../images/header-stadium.jpg";
import { Link } from "react-router-dom";

const Header = (props) => {
  const {leagues} = props;
  return (
    <Navbar className="navbar">
      <img src={image} alt="" width="1000" height="300" />
      <Link to={"/home"}>
        <div className="team-name"><img src={leagues.strBanner || "Sports Mania"} width="1000" height="200"  alt="" /></div>
      </Link>
    </Navbar>
  );
};

export default Header;
