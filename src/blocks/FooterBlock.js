import React from "react";
import { FaLinkedin, FaGithubSquare,FaFacebookSquare } from 'react-icons/fa';
import { IconContext } from "react-icons";



export default function FooterBlock() {
  return (

    <div className='footer-content'>
      <div className='my-profiles' data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease-in-sine" data-aos-duration='600'>
       <IconContext.Provider value={{  className: "global-class-name", size: '2.5em'}}>
        <a className='profile-link' href='https://www.linkedin.com/in/miroslavvalkovic/' target='_blank'><FaLinkedin /></a>
        <a className='profile-link' href='https://github.com/ValkovMirec' target='_blank'><FaGithubSquare /></a>
        <a className='profile-link' href='https://www.facebook.com/mirec.valkovic' target='_blank'><FaFacebookSquare /></a>
        </IconContext.Provider>
      </div>
      <div className='footer-other' >
        <label>
                Main page image by <b>Adrien Olichon</b> from <b>Pexels</b>
        </label>
      </div>
    </div>
  );
}
