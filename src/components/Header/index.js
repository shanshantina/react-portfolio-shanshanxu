import React, { useState } from "react";
import Navigation from "../Navigation";
import About from "../About";
import Project from "../Project";
import Contact from "../Contact";
import Resume from "../Resume";

function Header() {
  const [currentPage, handlePageChange] = useState("About Me");

  const renderPage = () => {
    switch (currentPage) {
      case "Portfolio":
        return <Project />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <header
        className="row justify-content-around align-items-center heading"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/pic/autumn.png"
          })`,
        }}
      >
        <h1 className="col-md-3">Shanshan Xu</h1>

        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </header>

      <main>{renderPage(currentPage)}</main>
    </>
  );
}

export default Header;
