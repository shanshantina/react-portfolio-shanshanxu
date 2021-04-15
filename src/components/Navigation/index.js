import React from "react";

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

  return (
    <nav className="row align-self-end">
      <ul className="flex-row">
        <li className={`${aboutmeSelected && "navActive"}`}>
          <span
            onClick={() => {
              setAboutmeSelected(true);
              setProjectSelected(false);
              setContactSelected(false);
              setResumeSelected(false);
            }}
          >
            About Me
          </span>
        </li>
        <li className={`${projectSelected && "navActive"}`}>
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
        <li className={`${contactSelected && "navActive"}`}>
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
        <li className={`${resumeSelected && "navActive"}`}>
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
    </nav>
  );
}

export default Navigation;
