import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Resume from "./components/Resume";

function App() {
  const [aboutmeSelected, setAboutmeSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Header></Header>
      <Navigation
        aboutmeSelected={aboutmeSelected}
        setAboutmeSelected={setAboutmeSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Navigation>
      <main>
        {contactSelected ? (
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
