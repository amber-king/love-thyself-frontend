import React from "react";

const About = () => {
  const emailAmber = "amberking@pursuit.org";

  return (
    <div className="author-page">
      <center>
        <h1> About Developer </h1>
      </center>
      <center>
        <div className="author-card">
          <div className="author-info">
            <img
              src="https://ca.slack-edge.com/TCVA3PF24-U04215X7ZQR-387d4394a939-512"
              alt="Amber"
              className="author-image"
            />
            <div className="author-container">
              <h2>Hi, I'm Amber King</h2>
              {/* <p className="author-title">Pursuit 9.0 Fellow</p> */}
              <div className="author-description-card">
                <p className="author-description">
                  "I am a growing Full Stack Web Developer at Pursuit
                  Fellowship, learning the many complexities of code one code at
                  a time. I hope this project helps me refine my skills in
                  front-end-react-app development and co-coding as well. My
                  focus is to develop my backend coding skills alongside
                  understanding Javascript and CSS workings. I'd hope with the
                  help of my peers and personal hard work, my growth with coding
                  will go far and beyond Pursuit 😁"
                </p>
              </div>
              <div className="author-buttons">
                <a href={`mailto:${emailAmber}`} className="author-button">
                  Email
                </a>
                <a
                  href="https://github.com/amber-king"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="author-button"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/amber-king-6210b0126/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="author-button"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default About;
