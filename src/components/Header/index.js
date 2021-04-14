import React from "react";
import Navigation from "../Navigation";
import { zoomIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

function Header(props) {
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
    <header className="flex-row px-1">
      <StyleRoot>
        <h1 style={styles.zoomIn}>Shanshan Xu</h1>
      </StyleRoot>
      <Navigation
        aboutmeSelected={aboutmeSelected}
        setAboutmeSelected={setAboutmeSelected}
        projectSelected={projectSelected}
        setProjectSelected={setProjectSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      />
    </header>
  );
}

export default Header;
