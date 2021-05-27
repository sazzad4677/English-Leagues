import { Card, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Sports.css';

const TeamName = () => {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/1/all_sports.php")
      .then((response) => response.json())
      .then((data) => setSports(data.sports));
      
  }, []);

  // const element = <FontAwesomeIcon icon={faCoffee} />

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 ">
      {sports.map((sport) => (
        <div className="col mb-4 ">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={sport.strSportThumb} />
            <Card.Body className="text-center">
              <Card.Title >{sport.strSport}</Card.Title>
              <Card.Text className="text-muted">Team Format: {sport.strFormat}</Card.Text>
              <Button className="btn">  Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default TeamName;
