import React from "react";
import Card from "react-bootstrap/Card";
import "/Users/davonbridgett/Documents/STARGAZERS/STARGAZERSFRONTEND/src/components/cardsAndContainersCSS/nasaPhoto.css";
import POTDDRAFT from "../shared/POTDDRAFT.webp"


const NasaPhoto = () => {
  return (
    <div className="nasaPhotoCard">
      <Card className="bg-dark text-white">
        <Card.Img src={POTDDRAFT} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default NasaPhoto;
