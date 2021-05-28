import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import Header from "../Header/Header";
import femaleImages from "../../images/Photo/female.png";
import maleImages from "../../images/Photo/male.png";
import mixedImages from "../../images/Photo/mixed-player.jpg";
import "./SportDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFlag, faFutbol, faMarsStroke, } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

//load data from the API server
const SportDetails = () => {
  const { id } = useParams();
  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
      .then((response) => response.json())
      .then((data) => setLeagues(data.leagues[0]));
  }, []);

  //If the API is down or the ID isn't found, this condition will be applied to the details data.
  let noData;
  if (leagues.length === 0 || leagues === "I" || leagues === null) noData = { display: 'block', color: 'red' };
  else noData = { display: 'none' };

  //object destructuring
  const {strLeague,dateFirstEvent,strCountry,strSport,strGender,strDescriptionEN,strBanner,strTwitter,strFacebook,strYoutube} = leagues;

  //condition for image in the details box
  const images = () => {
    if (strGender === "Male")  return <img src={maleImages} alt="" />;
    else if (strGender === "Female") return <img src={femaleImages} alt="" />
    else if (strGender === "Mixed") return <img src={mixedImages} alt="" />;
    else return null;
  };

  return (
    <div className="sports">
      <Header strBanner={strBanner}></Header>
      {/* If the API is down or waiting for API or the ID isn't found, this line of code will be shown*/}
      <p className="text-center" style={noData}>No Data Found, May be API down or waiting for the API load or ID not Exist. Wait a little bit or try Again</p>
      {/* This div for the upper box details */}
      <div className="mainContent" >
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
            {/* image div for details box */}
            <div className="player-image">{images()}</div>
          </div>
        </Container>
        {/* This div for Descriptions */}
        <Container>
          <div className="sports-description">
            <p>{strDescriptionEN}</p>
          </div>
        </Container>
      </div>
      {/* This div for footer icon */}
      <div className="d-flex justify-content-center">
        <a href={strFacebook} className="social-icons" style={{ fontSize: 40, color: '#4267B2' }}><FontAwesomeIcon icon={faFacebook} /></a>
        <a href={strTwitter} className="social-icons" style={{ fontSize: 40, color: '#1DA1F2' }}><FontAwesomeIcon icon={faTwitter} /></a>
        <a href={strYoutube} className="social-icons" style={{ fontSize: 40, color: 'red' }}><FontAwesomeIcon icon={faYoutube} /></a>
      </div>
    </div>
  );
};

export default SportDetails;
