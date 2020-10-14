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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            auctor, nulla vel consequat tempus, odio diam interdum erat, ac
            interdum quam mauris sed tortor. Etiam convallis dolor ipsum, vel
            vulputate dui aliquet quis. Quisque ultricies mauris enim.
            Pellentesque pulvinar bibendum orci et vehicula. Duis tincidunt
            laoreet molestie. Proin consectetur ut odio non sagittis. Aliquam
            vulputate molestie lacus, a accumsan ipsum lobortis ac. Suspendisse
            potenti. Morbi tempor nec ex id porttitor. Suspendisse sit amet
            magna facilisis, vehicula odio in, pharetra purus. Sed quis nulla
            aliquam, tristique nisi a, pretium tellus. Pellentesque posuere
            ullamcorper accumsan. Praesent nec elit eros. Vestibulum tristique
            vel metus quis congue. Pellentesque sed malesuada diam. Etiam leo
            orci, sodales eu neque eget, aliquam cursus orci. Proin facilisis
            consectetur quam. Maecenas fermentum turpis sem, sed dignissim mi
            luctus quis. Nullam et dapibus odio, nec rhoncus urna. Phasellus
            sodales enim a mauris scelerisque, et dapibus tellus euismod. Nullam
            at tellus ut ipsum porttitor dapibus ac eget magna. Nunc ullamcorper
            sodales ex, at suscipit est blandit quis. Quisque efficitur varius
            accumsan.
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
