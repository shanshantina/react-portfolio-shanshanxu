import React, { useState } from "react";
import { zoomIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { validateEmail } from "../../utils/helpers";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const styles = {
    zoomIn: {
      animation: "x 1s",
      animationName: Radium.keyframes(zoomIn, "zoomIn"),
    },
  };

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${capitalizeFirstLetter(e.target.name)} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <StyleRoot>
        <h1 style={styles.zoomIn}>Contact Me</h1>
      </StyleRoot>

      <div className="row justify-content-center">
        <form id="contact-form" onSubmit={handleSubmit} className="col-6">
          <div>
            <label htmlFor="name">Name:</label>
            <div>
              <input
                type="text"
                name="name"
                defaultValue={name}
                onBlur={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email">Email Address:</label>
            <div>
              <input
                type="email"
                name="email"
                defaultValue={email}
                onBlur={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <div>
              <textarea
                name="message"
                defaultValue={message}
                rows="5"
                onBlur={handleChange}
              />
            </div>
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button type="submit">Submit</button>
        </form>

        <div className="col-4">
        <img
            src={process.env.PUBLIC_URL + "/assets/pic/coffee.png"}
            style={{ width: "100%" }}
            alt="Network people with different tools"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
