import React, { useEffect, useState } from "react";

import { TiThMenuOutline } from 'react-icons/ti';
import { IconContext } from "react-icons";

export default function HeaderBlock() {
/*
  const [scroll, setScroll] = useState(false);

  useEffect(() => {

    window.addEventListener("scroll", () => {
    setScroll(window.scrollY > 10);

    })
  }, [])
*/
  function hamburgerHandler() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*
  const hamburgerHandler = () => {
    const el = document.getElementById('top-navbar');

    if(el.className === 'sticky' || el.className === 'navbar') {
      el.className += 'responsive';
    } else {
      el.className = 'navbar sticky'
    }
  }
*/
/*
  return (
    <div id='top-navbar' className={scroll ? "sticky" : "navbar"} >
      <nav>
        <ul>

          <li className={scroll ? "nav-bar-dest-side" : "nav-bar-dest-top"}>
            <a href="#root">HOME</a>
          </li>

          <li>|</li>

          <li className={scroll ? "nav-bar-dest-side" : "nav-bar-dest-top"}>
            <a href="#resume">RESUME</a>
          </li>

          <li>|</li>

          <li className={scroll ? "nav-bar-dest-side" : "nav-bar-dest-top"}>
            <a href="#projects">PROJECTS</a>
          </li>

          <li>|</li>

          <li className={scroll ? "nav-bar-dest-side" : "nav-bar-dest-top"}>
            <a href="#contact">CONTACT</a>
          </li>
          <li>
            <IconContext.Provider value={{  className: "global-class-name", size: '2.5em'}}>
              <a href='javascript:void(0);' className='hamburger' onClick={hamburgerHandler}><TiThMenuOutline /></a>
            </IconContext.Provider>
          </li>
        </ul>
      </nav>
    </div>
  );
*/

return (
  <div className="topnav" id="myTopnav" >
    <div class='hamburger-container'>
      <IconContext.Provider value={{  className: "global-class-name", size: '2.5em'}}>
        <a href='javascript:void(0);' className='icon' onClick={hamburgerHandler}><TiThMenuOutline /></a>
      </IconContext.Provider>
    </div>
        <div className='nav-destination'>
          <a href="#root">HOME</a>
          <a href="#resume">RESUME</a>
          <a href="#projects">PROJECTS</a>
         <a href="#contact">CONTACT</a>
        </div>
  </div>
)
}
/*

 <div className={scroll ? "sticky" : "navbar"}>
      <nav>
        <ul>
          <li className={scroll ? "nav-bar-dest-side" : "nav-bar-dest-top"}>
            <a href="#root">HOME</a>
          </li>

          <li>|</li>

          <li className={scroll ? "nav-bar-dest-side" : "nav-bar-dest-top"}>
            <a href="#projects">PROJECTS</a>
          </li>

          <li>|</li>

          <li className={scroll ? "nav-bar-dest-side" : "nav-bar-dest-top"}>
            <a href="#resume">RESUME</a>
          </li>

          <li>|</li>

          <li className={scroll ? "nav-bar-dest-side" : "nav-bar-dest-top"}>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>


*/
