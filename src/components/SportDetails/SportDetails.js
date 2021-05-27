import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import Header from "../Header/Header";
import Home from "../Home/Home";
import femaleImages from "../../images/Photo/female.png";
import maleImages from "../../images/Photo/male.png";
import "./SportDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faFlag,
  faFutbol,
  faMarsStroke,
} from "@fortawesome/free-solid-svg-icons";

const SportDetails = () => {
  const { id } = useParams();
  // console.log(useParams);.
  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
      .then((response) => response.json())
      .then((data) => setLeagues(data.leagues[0]));
  }, []);
  //   let gender = leagues.strGender;
  //   let isMale = () => {
  //       if (leagues.strGender = 'male') {
  //           return true;
  //       } else {
  //           return false;
  //       }
  //   }
  return (
    <div className="sports">
      <Header leagues={leagues}></Header>
      <Container className="sports-details ">
        <div className="d-flex">
          <div>
            <h1 className="title">{leagues.strLeague}</h1>
            <p className="description">
              {" "}
              <FontAwesomeIcon icon={faSearch} /> Founded: {leagues.dateFirstEvent}
            </p>
            <p className="description">
              <FontAwesomeIcon icon={faFlag} /> Country: {leagues.strCountry}
            </p>
            <p className="description">
              <FontAwesomeIcon icon={faFutbol} /> Sports Type: {leagues.strSport}
            </p>
            <p className="description">
              <FontAwesomeIcon icon={faMarsStroke} /> Gender: {leagues.strGender}
            </p>
          </div>
          <div className="player-image">
            <img src={maleImages} alt="" />
          </div>
        </div>
      </Container>
      <Container>
        <div className="sports-description">
          <p>{leagues.strDescriptionEN}</p>
        </div>
      </Container>
    </div>
  );
};

export default SportDetails;
