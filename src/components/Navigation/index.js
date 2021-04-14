import React from "react";
import { zoomIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

function Navigation(props) {
  const {
    aboutmeSelected,
    setAboutmeSelected,
    projectSelected,
    setProjectSelected,
    contactSelected,
    setContactSelected,
    resumeSelected,
    setResumeSelected,
  } = props;

  const styles = {
    zoomIn: {
      animation: "x 1s",
      animationName: Radium.keyframes(zoomIn, "zoomIn"),
    },
  };

  return (
    <nav className="row align-self-end">
      <StyleRoot>
        <ul className="flex-row">
          <li className="mx-2" style={styles.zoomIn}>
            <a
              href="#about"
              className={`${aboutmeSelected && "navActive"}`, "aboutMe"}
              onClick={() => {
                setAboutmeSelected(true);
                setProjectSelected(false);
                setContactSelected(false);
                setResumeSelected(false);
              }}
            >
              About Me
            </a>
          </li>
          <li className={`mx-2 ${projectSelected && "navActive"}`} style={styles.zoomIn}>
            <span
              onClick={() => {
                setProjectSelected(true);
                setContactSelected(false);
                setResumeSelected(false);
                setAboutmeSelected(false);
              }}
            >
              Portfolio
            </span>
          </li>
          <li
            className={`mx-2 ${contactSelected && "navActive"}`}
            style={styles.zoomIn}
          >
            <span
              onClick={() => {
                setContactSelected(true);
                setProjectSelected(false);
                setResumeSelected(false);
                setAboutmeSelected(false);
              }}
            >
              Contact
            </span>
          </li>
          <li
            className={`mx-2 ${resumeSelected && "navActive"}`}
            style={styles.zoomIn}
          >
            <span
              onClick={() => {
                setResumeSelected(true);
                setProjectSelected(false);
                setContactSelected(false);
                setAboutmeSelected(false);
              }}
            >
              Resume
            </span>
          </li>
        </ul>
      </StyleRoot>
    </nav>
  );
}

export default Navigation;
