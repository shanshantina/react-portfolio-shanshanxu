import React from "react";

function Navigation(props) {
  const {
    aboutmeSelected,
    setAboutmeSelected,
    contactSelected,
    setContactSelected,
    resumeSelected,
    setResumeSelected,
  } = props;

  return (
    <nav>
      <ul className="flex-row">
        <li className="mx-2">
          <a
            href="#about"
            className={`${aboutmeSelected && "navActive"}`}
            onClick={() => {
              setAboutmeSelected(true);
              setContactSelected(false);
              setResumeSelected(false);
            }}
          >
            About Me
          </a>
        </li>
        <li className="mx-2 'navActive'">
          <span
            onClick={() => {
              setContactSelected(false);
              setResumeSelected(false);
              setAboutmeSelected(false);
            }}
          >
            Portfolio
          </span>
        </li>
        <li className={`mx-2 ${contactSelected && "navActive"}`}>
          <span
            onClick={() => {
              setContactSelected(true);
              setResumeSelected(false);
              setAboutmeSelected(false);
            }}
          >
            Contact
          </span>
        </li>
        <li className={`mx-2 ${resumeSelected && "navActive"}`}>
          <span
            onClick={() => {
              setResumeSelected(true);
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
