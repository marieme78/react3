import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../App.css";
const Player = ({ nom, image, equipe, nationalité, age, numerodemaillot }) => {
  return (
    <>
      <div className="ladiv">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{nom}</Card.Title>
            <Card.Text>
              Il a {age} ans, Son numero de maillot est le {numerodemaillot},
              {" "}il est dans l'equipe de {equipe} et est de nationalité{" "}
              {nationalité}.
            </Card.Text>
            <Button variant="primary">Découvrir plus</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default Player;
