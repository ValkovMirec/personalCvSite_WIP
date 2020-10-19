import React from "react";

//Bootstrap

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ProjectCards() {
  return (
    <div className="project-cards" id="projects">
      <div className="cards-container">
        <Card style={{ width: "18rem" }} className="single-card" data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease-in-sine" data-aos-duration='300'>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="single-card" data-aos="fade-up" data-aos-delay="400" data-aos-easing="ease-in-sine" data-aos-duration='300'>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="single-card" data-aos="fade-up" data-aos-delay="800" data-aos-easing="ease-in-sine" data-aos-duration='300'>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
