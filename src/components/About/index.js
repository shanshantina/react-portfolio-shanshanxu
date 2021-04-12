import React from "react";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img
        src={process.env.PUBLIC_URL + "/assets/pic/self.png"}
        className="my-2"
        style={{ width: "20%" }}
        alt="myself which wear a glasses with smile on the face."
      />
      <div className="my-2">
        <p>
          Currently focus on Coding Bootcamp program at UofT SCS to prepare to
          be a web developer.
        </p>
        <p>
          In the previous job, Expert in Reconciliation and Exception
          processing. Strong accounting skills, with demonstrated expertise in
          General Ledger and DDA reconciliation. Team leadership, most recently
          leading 10 direct reports, providing coaching and support for team
          growth and development. Review and analysis of Exception processing,
          creating and implementing streamlined workflows to leverage
          automation, elimination redundancy, and provide more efficient and
          effective end-to-end processing. Delivering superior customer service
          and partner support while adhering to Service Level Agreements and
          rules and regulations outlined by Payments Canada.
        </p>
      </div>
    </section>
  );
}

export default About;
