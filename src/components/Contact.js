import React from "react";
import EmailForm from "./EmailForm";

export default function Contact() {
  return (
    <div className="contact" id="contact" >
      <div className="contact-container" >
        <EmailForm />
        <p className="or-element" data-aos="fade-up" data-aos-delay="500" data-aos-easing="ease-in-sine" data-aos-duration='1200'>or</p>
        <div className="other-contacts" data-aos="zoom-out" data-aos-delay="0" data-aos-easing="ease-in-sine" data-aos-duration='800'>
          <p>Miroslav Valkovič</p>
          <p>
            valkovic.m@protonmail.com
            <a href="mailto:valkovic.m@protonmail.com"> | Send an email</a>
          </p>
          <p>
            +421915131456
            <a href="tel:+421915131456"> | Give me a ring</a>
          </p>
        </div>
      </div>
    </div>
  );
}
