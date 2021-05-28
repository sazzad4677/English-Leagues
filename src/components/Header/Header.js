import React from "react";
import { Navbar } from "react-bootstrap";
import "./Header.css";
import image from "../../images/header-stadium.jpg";
import { Link } from "react-router-dom";

const Header = (props) => {
  const {strBanner} = props;
  return (
    <Navbar className="navbar">
      <img className="navbar-background" src={image} alt="" width="1000" height="300" />
      <Link to={"/home"}>
        <div> <h3 className="site-title">English Leagues</h3> </div>
        <div className="team-image"> <img src={strBanner} width="1000" height="200"  alt="" /> </div>
      </Link>
    </Navbar>
  );
};

export default Header;
