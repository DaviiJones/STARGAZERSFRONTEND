import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Curiosity from "/Users/davonbridgett/Documents/STARGAZERS/STARGAZERSFRONTEND/src/components/shared/Curiosity.webp"
import Opportunity from "/Users/davonbridgett/Documents/STARGAZERS/STARGAZERSFRONTEND/src/components/shared/Opportunity.jpeg"
import Spirit from "/Users/davonbridgett/Documents/STARGAZERS/STARGAZERSFRONTEND/src/components/shared/Spirit.jpeg"
import "/Users/davonbridgett/Documents/STARGAZERS/STARGAZERSFRONTEND/src/components/cardsAndContainersCSS/missionCards.css";



const Missions = () => {
  return (
    <div className="mission-cards">
      <Card bg="dark" data-bs-theme="dark" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Curiosity} />
        <Card.Body>
          <Card.Title>Curiosity</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="outline-warning">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card bg="dark" data-bs-theme="dark" style={{ width: "18rem" }}>
        <Card.Img variant="top" src= {Opportunity} />
        <Card.Body>
          <Card.Title>Opportunity</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="outline-warning">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card bg="dark" data-bs-theme="dark" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Spirit} />
        <Card.Body>
          <Card.Title>Spirit</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="outline-warning">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Missions;