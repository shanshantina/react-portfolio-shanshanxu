import React from "react";
import { zoomIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

function Project() {
  const styles = {
    zoomIn: {
      animation: "x 1s",
      animationName: Radium.keyframes(zoomIn, "zoomIn"),
    },
  };

  return (
    <section>
      <StyleRoot>
        <h1 style={styles.zoomIn}>Portfolio</h1>
      </StyleRoot>

      <div className="row">
        <div className="card bg-dark text-white">
          <img
            src={process.env.PUBLIC_URL + "/assets/project/0.JPG"}
            className="card-img"
            alt="This is a tech blog and require to login"
          />
          <div className="card-img-overlay">
            <a
              className="card-title"
              href="https://tech-blog-shanshanxu.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Tech Blog
            </a>
            <a
              className="card-text"
              href="https://github.com/shanshantina/tech-blog"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <div className="card bg-dark text-white">
          <img
            src={process.env.PUBLIC_URL + "/assets/project/1.JPG"}
            className="card-img"
            alt="Weather Dashboard website with city weather information shows on the main page."
          />
          <div className="card-img-overlay">
            <a
              className="card-title"
              href="https://shanshantina.github.io/weather-dashboard/"
              target="_blank"
              rel="noreferrer"
            >
              Weather Dashboard
            </a>
            <a
              className="card-text"
              href="https://github.com/shanshantina/weather-dashboard"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <div className="card bg-dark text-white">
          <img
            src={process.env.PUBLIC_URL + "/assets/project/2.JPG"}
            className="card-img"
            alt="Note taker page with a 'get start' button to start to take notes."
          />
          <div className="card-img-overlay">
            <a
              className="card-title"
              href="https://note-taker-shanshanxu.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Note Taker
            </a>
            <a
              className="card-text"
              href="https://github.com/shanshantina/note-taker"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <div className="card bg-dark text-white">
          <img
            src={process.env.PUBLIC_URL + "/assets/project/3.JPG"}
            className="card-img"
            alt="Coding Quiz game with light green start button in the middle of the page."
          />
          <div className="card-img-overlay">
            <a
              className="card-title"
              href="https://shanshantina.github.io/code-quiz/"
              target="_blank"
              rel="noreferrer"
            >
              Code Quiz
            </a>
            <a
              className="card-text"
              href="https://github.com/shanshantina/code-quiz"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <div className="card bg-dark text-white">
          <img
            src={process.env.PUBLIC_URL + "/assets/project/4.JPG"}
            className="card-img"
            alt="Signed up form for cocktail ingredients with cocktail neon sign at background."
          />
          <div className="card-img-overlay">
            <a
              className="card-title"
              href="https://uoft-project1-group5.github.io/cocktail-map/"
              target="_blank"
              rel="noreferrer"
            >
              Online Barkeep
            </a>
            <a
              className="card-text"
              href="https://github.com/uoft-project1-group5/cocktail-map"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <div className="card bg-dark text-white">
          <img
            src={process.env.PUBLIC_URL + "/assets/project/5.JPG"}
            className="card-img"
            alt="Signed up page with three introduction cards of using this site."
          />
          <div className="card-img-overlay">
            <a
              className="card-title"
              href="https://project2-simply-unused.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Simply Unused
            </a>
            <a
              className="card-text"
              href="https://github.com/Bootcamp-Group5/simply-unused"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
