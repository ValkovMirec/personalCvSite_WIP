import React from "react";

import { FaGithubSquare } from 'react-icons/fa'
import { IconContext } from "react-icons"

//Bootstrap

import Card from "react-bootstrap/Card";

export default function ProjectCards() {
  return (
    <div className="project-cards" id="projects">
      <div className="cards-container">
        <Card style={{ width: "18rem" }} className="single-card" data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease-in-sine" data-aos-duration='300'>
          <Card.Img variant="top" src={require('../img/trainTicketPrev.png')} />
          <Card.Body>
            <Card.Title>Train Ticket Generator</Card.Title>
            <Card.Text className='card-text'>
              ReactJS - Form input handling , raw data handling.
            </Card.Text>
            <div className='card-button-container'>
              <a className="project-card-button" href='https://train-ticket-generator.netlify.app/?fbclid=IwAR0Mb7LqYeUSG3Q_Wmmbh2vqZ_1ATBwLQNe1qlrjebOd_8MyiK6xUAuNKjI' target='_blank'>Go to app</a>
              <IconContext.Provider value={{  className: "global-class-name", size: '1.2em', color:'black'}}>
                <a className="project-card-button" href='https://github.com/ValkovMirec/trainTicket.git' target='_blank'>View code <FaGithubSquare /></a>
              </IconContext.Provider>
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="single-card" data-aos="fade-up" data-aos-delay="400" data-aos-easing="ease-in-sine" data-aos-duration='300'>
          <Card.Img variant="top" src={require('../img/l2mPrev.png')} />
          <Card.Body>
            <Card.Title>Learn2Mock - data generator</Card.Title>
            <Card.Text className='card-text'>
              Dummy data generator, using conditional rendering, with JSON output.
            </Card.Text>
            <div className='card-button-container'>
              <a className="project-card-button" href='https://learn2mock-json-generator.netlify.app/?fbclid=IwAR3qIxFlkrvVBMhuGx9e0UsXrmQM-86pdOkGvKf98eB1UGtnr48CHB0pmSw' target='_blank'>Go to app</a>
              <IconContext.Provider value={{  className: "global-class-name", size: '1.2em', color:'black'}}>
                <a className="project-card-button" href='https://github.com/ValkovMirec/react_learn2mock_app' targe='_blank'>View code <FaGithubSquare /></a>
              </IconContext.Provider>
            </div>

          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="single-card" data-aos="fade-up" data-aos-delay="800" data-aos-easing="ease-in-sine" data-aos-duration='300'>
          <Card.Img variant="top" src={require('../img/spotifyPrev.png')} />
          <Card.Body>
            <Card.Title>Spotify-clone artist list</Card.Title>
            <Card.Text className='card-text'>
              App in ReactJS ,using maps , async/await with node fetch, React bootstrap, React router DOM
            </Card.Text>
            <div className='card-button-container'>
              <a className="project-card-button" href='https://spotify-react-app-clone.netlify.app/?fbclid=IwAR04i7qYiditaGSeWx6N1lgRh5vdOSgiLtQbSdqpMLKirKbQ8viNSMgAfM8' target='_blank'>Go to app</a>
              <IconContext.Provider value={{  className: "global-class-name", size: '1.2em', color:'black'}}>
                <a className="project-card-button" href='https://github.com/ValkovMirec/spotifyCopyArtistList' target='_blank'>View code <FaGithubSquare /></a>
              </IconContext.Provider>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
