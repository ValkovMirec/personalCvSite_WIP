import React from "react";

//components
import LayoutBlock from "./blocks/LayoutBlock";
import Contact from "./components/Contact";
import MainPage from "./components/MainPage";
import ProjectCards from "./components/ProjectCards";
import Resume from "./components/Resume";
//npm's

//background animation

export default function App() {



  return (
    <div className="app-container" >
      <LayoutBlock >
        <MainPage />
        <Resume  />
        <ProjectCards />
        <Contact />
      </LayoutBlock>
    </div>
  );
}
