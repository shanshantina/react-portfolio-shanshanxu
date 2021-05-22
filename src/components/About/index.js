import React from "react";
import { zoomIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

function About() {
  const styles = {
    zoomIn: {
      animation: "x 1s",
      animationName: Radium.keyframes(zoomIn, "zoomIn"),
    },
  };

  return (
    <section>
      <StyleRoot>
        <h1 style={styles.zoomIn}>About Me</h1>
      </StyleRoot>

      <div className="row justify-content-around">
        <div className="col-md-3 row align-items-center about">
          <img
            src={process.env.PUBLIC_URL + "/assets/pic/self.png"}
            style={{ width: "100%" }}
            alt="myself which wear a glasses with smile on the face."
          />
        </div>

        <div className="col-md-8 row align-items-center">
          <p>
            Changing career path from financial role to web developer, graduate
            from Coding Bootcamp program at University of Toronto SCS in May
            2021.<br></br>
            Within the Bootcamp, Gained the knowledge in HTML, CSS, JavaScript,
            jQuery, React, NPM packages, GraphQL, APIs, Node.js, Express.js,
            MySQL, Sequelize, MongoDB, Mongoose, and more. Built 16 personal
            projects by using those technologies. Partnered with other learners
            in the class to create 3 team projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
