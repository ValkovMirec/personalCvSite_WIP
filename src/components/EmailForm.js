import React from "react";
import emailjs from "emailjs-com";

//Email npm init

import { EmailJSResponseStatus, init } from "emailjs-com";
init("user_MXmNlNl0tQLHzSpxOf1DD");

export default function EmailForm() {
  const sendEmailHandler = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        event.target,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log("result.text", result.text);
        },
        (error) => {
          console.log("error.text", error.text);
        }
      );
  };

  return (
    <div className="email-form-container" data-aos="zoom-out" data-aos-delay="0" data-aos-easing="ease-in-sine" data-aos-duration='1200'>
      <form id="contact-form" onSubmit={sendEmailHandler} >
        <input type="hidden" name="contact_number" />
        <div className="input-field-row">
          <div className="input-field-name">
            <label>Name:</label>
            <input type="text" name="user_name" />
          </div>
          <div className="input-field-mail">
            <label>Email:</label>
            <input type="email" name="user_email" />
          </div>
        </div>
        <label>Message:</label>
        <textarea name="message" />
        <input type="submit" value="Send" className="form-submit-button" />
      </form>
    </div>
  );
}
