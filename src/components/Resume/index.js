import React from "react";
import { zoomIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

function Resume() {
  const styles = {
    zoomIn: {
      animation: "x 1s",
      animationName: Radium.keyframes(zoomIn, "zoomIn"),
    },
  };

  return (
    <section className='resume-container'>
      <StyleRoot>
        <h1 style={styles.zoomIn}>Resume</h1>
      </StyleRoot>

      <h3>
        Download my{" "}
        <a
          className="resume"
          href={
            process.env.PUBLIC_URL + "/assets/document/resume-shanshanxu.pdf"
          } download
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </h3>
      <div className="row justify-content-around align-items-center">
        <div className="col-md-5">
          <h2>Front-end Proficiencies</h2>
          <ul className="skill">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>GraphQL</li>
            <li>Bootstrap</li>
          </ul>
        </div>

        <div className="col-md-5">
          <h2>Back-end Proficiencies</h2>
          <ul className="skill">
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>Apollo Server</li>
            <li>REST</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
