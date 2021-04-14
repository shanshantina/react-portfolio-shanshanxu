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
    <section>
      <StyleRoot>
        <h1 style={styles.zoomIn}>Resume</h1>
      </StyleRoot>

      <h3>
        Download my{" "}
        <a
          href={
            process.env.PUBLIC_URL + "/assets/document/resume-shanshanxu.pdf"
          }
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </h3>
      <h2>Front-end Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h2>Back-end Proficiencies</h2>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
      </ul>
    </section>
  );
}

export default Resume;
