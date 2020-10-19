import React from "react";
import ReactDOM from "react-dom";

import AOS from '../node_modules/aos/dist/aos.js'

import "./index.css";
import '../node_modules/aos/dist/aos.css'

import App from "./App";

 AOS.init({
      easing: 'ease-in-out-back',
      disable: 'mobile'
    });

ReactDOM.render(<App AOS={AOS} />, document.getElementById("root"));
