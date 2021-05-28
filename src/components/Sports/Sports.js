import { Card, Button, Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import './Sports.css';

const Sports = (props) => {
  const [leagues , setLeagues] = useState([]);

  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England")
      .then((response) => response.json())
      .then((data) => setLeagues(data.countrys));
      
  }, []);
  return (
    <Container className="row row-cols-1 row-cols-md-3 g-4 ">
      {leagues.map((league) => (
        <div key={league.idLeague} className="col mb-4 ">
          <Card style={{ width: "18rem", height:"28rem" }}>
            <Card.Img variant="top" src={league.strBadge} alt={league.strLeague+"image"} />
            <Card.Body className="text-center">
              <Card.Title >{league.strLeague}</Card.Title>
              <Card.Text className="text-muted">Sports Type: {league.strSport}</Card.Text>
              <Link to={`/sports/${league.idLeague}`}><Button className="btn">  Explore <FontAwesomeIcon icon={faArrowRight} /></Button></Link>
            </Card.Body>
          </Card>
        </div>
      ))}
    </Container>
  );
};

export default Sports;
