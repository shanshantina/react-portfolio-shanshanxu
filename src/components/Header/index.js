import React from "react";
import Navigation from "../Navigation";

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

  return (
    <header
      className="row justify-content-around align-items-center heading"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/pic/autumn.png"})`,
      }}
    >
      <h1>Shanshan Xu</h1>

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
