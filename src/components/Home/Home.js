import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Sports from "../Sports/Sports";
import './Home.css';

const Home = () => {
  //This is the parent component, which loads data from the API and then sets it in useState.
  const [leagues , setLeagues] = useState([]);

  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England")
      .then((response) => response.json())
      .then((data) => setLeagues(data.countrys));
      
  }, []);
  
  return (
    <div className="sports">
      <div>
        <Header leagues={leagues} setLeagues={setLeagues}></Header>
      </div>
      <div className="container">
        <Sports leagues={leagues} setLeagues={setLeagues}></Sports>
      </div>
    </div>
  );
};

export default Home;
