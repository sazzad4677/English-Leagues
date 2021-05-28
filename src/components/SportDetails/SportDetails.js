import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import Header from "../Header/Header";
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
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const SportDetails = () => {
  const { id } = useParams();
  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
      .then((response) => response.json())
      .then((data) => setLeagues(data.leagues[0]));
  }, []);
  
  const {
    strLeague,
    dateFirstEvent,
    strCountry,
    strSport,
    strGender,
    strDescriptionEN,
    strBanner,
    strTwitter,
    strFacebook,
    strYoutube
  } = leagues;
  const images = () => {
    if (strGender === "Male") {
      return <img src={maleImages} alt="" />;
    } else {
      return <img src={femaleImages} alt="" />;
    }
  };
  
  return (
    <div className="sports">
      <Header strBanner={strBanner}></Header>
      <Container className="sports-details ">
        <div className="d-flex">
          <div>
            <h1 className="title">{strLeague}</h1>
            <p className="description">
              <FontAwesomeIcon icon={faSearch} /> Founded: {dateFirstEvent}
            </p>
            <p className="description">
              <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}
            </p>
            <p className="description">
              <FontAwesomeIcon icon={faFutbol} /> Sports Type: {strSport}
            </p>
            <p className="description">
              <FontAwesomeIcon icon={faMarsStroke} /> Gender: {strGender}
            </p>
          </div>
          <div className="player-image">{images()}</div>
        </div>
      </Container>
      <Container>
        <div className="sports-description">
          <p>{strDescriptionEN}</p>
        </div>
      </Container>
      <div className="d-flex justify-content-center">
        <a href={strFacebook} target="_blank" className="social-icons">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href={strTwitter} className="social-icons">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href={strYoutube} className="social-icons" >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default SportDetails;
