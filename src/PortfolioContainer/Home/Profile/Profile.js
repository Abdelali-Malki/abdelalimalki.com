import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/abdelalimalki.ae/">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="https://www.instagram.com/malki.dev/">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://wa.link/xseaoq">
                <i className="fa fa-whatsapp" />
              </a>
              <a href="https://twitter.com/AbdelalimalkiAe">
                <i className="fa fa-twitter" />
              </a>
              <a href="https://www.linkedin.com/in/abdelali-malki-2052b6257/">
                <i className="fa fa-linkedin" />
              </a>
              <a href="https://github.com/Abdelali-Malki">
                <i className="fa fa-github" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Abdelali MALKI</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Welcome To My Digital Home🧮",
                    1500,
                    "Full stack Developer💻",
                    1000,
                    "Cross Platform Dev🌐",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="cv.pdf" download="Ehiedu Ehizcv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}