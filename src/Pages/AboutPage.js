import React from "react";

// this page gives a peak at who the developer is, their contact info & what the site has to offer
const About = () => {
  const emailAmber = "amberking@pursuit.org";

  return (
    <div className="about-page">
      <h1>About Developer</h1>
      <div className="about-content">
        <img
          src="https://ca.slack-edge.com/TCVA3PF24-U04215X7ZQR-387d4394a939-512"
          alt="Amber"
          className="author-image"
        />
        <div className="author-description">
          <h2>Hi, I'm Amber King 😁👋🏾</h2>
          <bold>
            <h3>
              Currently enrolled and finishing up my role as a fellow at Pursuit
              Fellowship I created this application to work on my Full Stack Web
              Design skills. There was much focus on the backend work and
              research alongside CSS practice and refining, both which I desire
              to have as career focuses. Also, it was much time used to
              understand the work and data flow of the frontend and backend.
              <h3>
                This quotes application is a website set for all screen
                settings. It allows the user(that's you🫵🏾) to be able to come
                to a place where you can find and discovery all type of quotes
                for whatever mood or occassion is needed.As the user you are
                alloted the following:
                <p>
                  (i) Abilty to search by keywords through all quotes on the All
                  Quotes page
                </p>
                <p>
                  (ii)Ability to search quotes by certain authors via the All
                  Author catalog that is fully click-through and will redirect
                  you to a list of quotes by your choosen author .
                </p>
                Each of the pages to navigate through have a brief description of what can be found there and how to use each page. Also, explains why some results do not appear.
              </h3>
              <p>
                Below is links to all my contact information, for any questions
                or suggestions for this or future projects, Thanks and I hope
                you enjoy this site. 🤗
              </p>
            </h3>
          </bold>
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
  );
};

export default About;
