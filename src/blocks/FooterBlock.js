import React from "react";

export default function FooterBlock() {
  return (

    <div className='footer-content'>
      <label>
                Main page image by <b>Adrien Olichon</b> from <b>Pexels</b>
      </label>
       <br></br>
      <label>
        Icons made by
        {" "}
          <a
            href="https://www.flaticon.com/authors/those-icons"
            title="Those Icons"
          >
             Those Icons
           </a>
           {" "}
           from
           {" "}
           <a href="https://www.flaticon.com/" title="Flaticon">
           www.flaticon.com
           </a>
      </label>

    </div>
  );
}
