import React from "react";
import Header from "../Header/Header";
import TeamName from "../Sports/Sports";
import './Home.css';

const Home = () => {
  return (
    <div className="sports">
      <div>
        <Header />
      </div>
      <div className="container">
        <TeamName />
      </div>
    </div>
  );
};

export default Home;
