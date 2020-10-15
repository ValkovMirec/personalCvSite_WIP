import React from "react";
import DownloadCV from './DownloadCV'
import MyPDF from '../docs/Valkovic-CV.pdf';



export default function Resume() {
  return (
    <div className="resume" id="resume">
      <div className="resume-content-container">
        <div className="about-me">
          <h3>About me</h3>
          <p>


              I am junior web developer based in Hlohovec, Slovakia,
              and don't have any problems with relocating. I have experience with
              React.js, Javascript ES6, HTML, CSS3 on advanced levels. I am not
              lost in a npm packages either, like: React bootstrap, React router etc.
              I've attended and finished, React.JS/Javascript web developer course,
              from Learn2Code. Number of my certificate is: 2020/121.
              Main thing a wanted to say is, that I love poke around and learn new
              things about Front-end development. It's my hobby.


          </p>
        </div>

        <div className="resume-download">
          <img
            className="my-photo"
            src={require("../img/portrait.png")}
            alt="Miroslav Valkovic"
          ></img>
          <div className="resume-download-button">
            <h3>Download resume here:</h3>
            <DownloadCV src={MyPDF}>Click</DownloadCV>
          </div>
        </div>
      </div>
    </div>
  );
}
