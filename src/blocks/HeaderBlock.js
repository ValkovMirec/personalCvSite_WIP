import React, { useEffect, useState } from "react";

export default function HeaderBlock() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {}, []);
  window.addEventListener("scroll", () => {
    setScroll(window.scrollY > 10);
  });

  return (
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
            <a href="#contact">CONTACT</a>
          </li>

          <li>|</li>

          <li className={scroll ? "nav-bar-dest-side" : "nav-bar-dest-top"}>
            <a href="#resume">RESUME</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
