import React from "react";
import Header from "../Header/Header";
import Sports from "../Sports/Sports";
import './Home.css';

const Home = () => { 
  return (
    <div className="sports">
      <div>
        <Header ></Header>
      </div>
      <div className="container">
        <Sports></Sports>
      </div>
    </div>
  );
};

export default Home;
