import React from "react";
import "./Footer.css";
import shape from "../../../img/Testimonial/shape-bg.png";

export default function footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        {/* <img
          src={require("../../../assets/Home/shape-bg.png").default}
          alt="you have problem with the image"
        /> */}
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
