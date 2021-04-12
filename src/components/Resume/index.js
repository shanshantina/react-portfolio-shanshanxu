import React from "react";

function Resume() {
  return (
    <section>
      <h1>Resume</h1>
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
