import React from "react";
import { zoomIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

function About() {
  const styles = {
    zoomIn: {
      animation: "x 1s",
      animationName: Radium.keyframes(zoomIn, "zoomIn"),
    },
  };

  return (
    <section>
      <StyleRoot>
        <h1 id="about" style={styles.zoomIn}>
          About Me
        </h1>
      </StyleRoot>
      <div className="row justify-content-center">
        <div className="col-3">
          <img
            src={process.env.PUBLIC_URL + "/assets/pic/self.png"}
            style={{ width: "100%" }}
            alt="myself which wear a glasses with smile on the face."
          />
        </div>

        <div className="col-8 row align-items-center">
          <p>
            Currently focus on Coding Bootcamp program at UofT SCS to prepare to
            be a web developer. <br></br>
            In the previous job, Expert in Reconciliation and Exception
            processing. Strong accounting skills, with demonstrated expertise in
            General Ledger and DDA reconciliation. Team leadership, most
            recently leading 10 direct reports, providing coaching and support
            for team growth and development. Review and analysis of Exception
            processing, creating and implementing streamlined workflows to
            leverage automation, elimination redundancy, and provide more
            efficient and effective end-to-end processing. Delivering superior
            customer service and partner support while adhering to Service Level
            Agreements and rules and regulations outlined by Payments Canada.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
