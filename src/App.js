import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [aboutmeSelected, setAboutmeSelected] = useState(false);
  const [projectSelected, setProjectSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Header
        aboutmeSelected={aboutmeSelected}
        setAboutmeSelected={setAboutmeSelected}
        projectSelected={projectSelected}
        setProjectSelected={setProjectSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Header>

      <main>
        {projectSelected ? (
          <Project></Project>
        ) : contactSelected ? (
          <Contact></Contact>
        ) : resumeSelected ? (
          <Resume></Resume>
        ) : (
          <About></About>
        )}
      </main>
    </div>
  );
}

export default App;
