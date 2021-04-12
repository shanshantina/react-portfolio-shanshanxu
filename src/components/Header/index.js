import React from "react";
import Navigation from "../Navigation";

function Header(props) {
  const {
    aboutmeSelected,
    setAboutmeSelected,
    contactSelected,
    setContactSelected,
    resumeSelected,
    setResumeSelected,
  } = props;

  return (
    <header className="flex-row px-1">
      <div>
        <h1>Shanshan Xu</h1>
      </div>
      <Navigation
        aboutmeSelected={aboutmeSelected}
        setAboutmeSelected={setAboutmeSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      />
    </header>
  );
};

export default Header;
