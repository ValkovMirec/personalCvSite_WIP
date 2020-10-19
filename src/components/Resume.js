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


              I am junior web developer based in Hlohovec, Slovakia. I've had programming
              classes on school, but after I finished, I choose a different path.
              After few years, my professional life has started to bore me. I remembered, that
              programming was one of the few things that I liked in school, so
              I've decided to return to it. I tried online courses and learning
              myself. I have experience with React.js, Javascript ES6, HTML, CSS3 on
              intermediate level. I am not lost in a npm packages either, like:
              React bootstrap, React router etc. I've attended and finished,
              React.JS/Javascript web developer course, from Learn2Code. Number
              of my certificate is: 2020/121. Main thing a wanted to say is,
              that I love poke around and learn new things about programming.
              It's my hobby, and I'm really looking forward to work with you.


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
            <DownloadCV src={MyPDF} data-aos="zoom-in" data-aos-delay="0" data-aos-easing="ease-in-sine" data-aos-duration='1200'>Click</DownloadCV>
          </div>
        </div>
      </div>
    </div>
  );
}
