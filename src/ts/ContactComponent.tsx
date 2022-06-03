import React, { useState } from "react";

export const ContactComponent = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = () => {};

  return (
    <div id="ContactComponent">
      <div className="contact-container">
        <span className="contact-title">Contact Me</span>
        <div className="contact-field-row">
          <label>*Name:</label>
          <input type="text" onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div className="contact-field-row">
          <label>Number:</label>
          <input type="text" onChange={(e) => setNumber(e.target.value)}></input>
        </div>
        <div className="contact-field-row">
          <label>Email:</label>
          <input type="text" onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className="contact-field-row">
          <label>*Message:</label>
          <input type="text" className="message-input" onChange={(e) => setMessage(e.target.value)}></input>
        </div>
        <div className="contact-field-row">
          <button onClick={() => sendMessage()}>Submit</button>
        </div>
      </div>
    </div>
  );
};
