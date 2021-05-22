import React from "react";
import { zoomIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

function Project() {
  const projects = [
    {
      name: "Dog Dash",
      alt: "This is the dog dash and require to login.",
      deployed: "https://dog-dash.herokuapp.com/",
      github: "https://github.com/pro3gro3/walk-my-dog",
    },
    {
      name: "Tech Blog",
      alt: "This is a tech blog and require to login.",
      deployed: "https://tech-blog-shanshanxu.herokuapp.com/",
      github: "https://github.com/shanshantina/tech-blog",
    },
    {
      name: "Weather Dashboard",
      alt:
        "Weather Dashboard website with city weather information shows on the main page.",
      deployed: "https://shanshantina.github.io/weather-dashboard/",
      github: "https://github.com/shanshantina/weather-dashboard",
    },
    {
      name: "Note Taker",
      alt: "Note taker page with a 'get start' button to start to take notes.",
      deployed: "https://note-taker-shanshanxu.herokuapp.com/",
      github: "https://github.com/shanshantina/note-taker",
    },
    {
      name: "Code Quiz",
      alt:
        "Coding Quiz game with light green start button in the middle of the page.",
      deployed: "https://shanshantina.github.io/code-quiz/",
      github: "https://github.com/shanshantina/code-quiz",
    },
    {
      name: "Online Barkeep",
      alt:
        "Signed up form for cocktail ingredients with cocktail neon sign at background.",
      deployed: "https://uoft-project1-group5.github.io/cocktail-map/",
      github: "https://github.com/uoft-project1-group5/cocktail-map",
    },
    {
      name: "Simply Unused",
      alt: "Signed up page with three introduction cards of using this site.",
      deployed: "https://project2-simply-unused.herokuapp.com/",
      github: "https://github.com/Bootcamp-Group5/simply-unused",
    },
  ];

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

      <div className="row justify-content-center align-items-center">
        {projects.map((project, i) => (
          <div className="card" key={project.name}>
            <img
              src={process.env.PUBLIC_URL + `/assets/project/${i}.JPG`}
              className="card-img"
              alt={project.alt}
            ></img>

            <div className="card-img-overlay row align-items-center justify-content-center">
              <a
                className="card-title"
                href={project.deployed}
                target="_blank"
                rel="noreferrer"
              >
                {project.name}
              </a>
              <a
                className="card-text"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
