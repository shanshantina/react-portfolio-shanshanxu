import React from "react";
import { zoomIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

function Footer() {
  const styles = {
    zoomIn: {
      animation: "x 1s",
      animationName: Radium.keyframes(zoomIn, "zoomIn"),
    },
  };

  return (
    <StyleRoot>
      <section style={styles.zoomIn} className="footer">
        <a
          href="https://github.com/Shanshantina"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/shanshan-xu-b404931bb/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://stackoverflow.com/users/14614460/shanshan-xu?tab=profile"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-stack-overflow"></i>
        </a>
      </section>
    </StyleRoot>
  );
}

export default Footer;
