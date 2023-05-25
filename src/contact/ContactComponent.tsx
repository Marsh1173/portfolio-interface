import React, { useRef, useState } from "react";
import { CONTACT_CONTENT } from "./ContactContent";

import "./ContactStyles.less";

export const ContactComponent = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendButton = useRef<HTMLButtonElement>(null);
  const nameElem = useRef<HTMLTextAreaElement>(null);
  const numberElem = useRef<HTMLTextAreaElement>(null);
  const emailElem = useRef<HTMLTextAreaElement>(null);
  const messageElem = useRef<HTMLTextAreaElement>(null);

  let canSend: boolean = true;

  const sendMessage = () => {
    if (!canSend || !sendButton.current) {
      return;
    }

    let missingInputs: string[] = [];
    if (name === "") {
      nameElem.current!.classList.toggle("error", true);
      missingInputs.push("name");
    }
    if (message === "") {
      messageElem.current!.classList.toggle("error", true);
      missingInputs.push("message");
    }

    if (missingInputs.length !== 0) {
      alert("PLEASE FILL IN " + missingInputs.join(", ") + ".");
      return;
    }

    sendButton.current.disabled = true;
    sendButton.current.innerText = "Sending...";
    canSend = false;

    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (nameElem.current) nameElem.current.value = "";
      if (numberElem.current) numberElem.current.value = "";
      if (emailElem.current) emailElem.current.value = "";
      if (messageElem.current) messageElem.current.value = "";
      if (request.readyState == 4 && request.status == 200) {
        sendButton.current!.disabled = false;
        sendButton.current!.innerText = "Send";
        alert("Sent!");
      } else if (request.readyState == 4) {
        sendButton.current!.disabled = false;
        sendButton.current!.innerText = "Send";
        alert("Error sending request: " + request.response);
      }
    };

    var data_js = {
      access_token: CONTACT_CONTENT.email_smtp_access_token,
      subject: "Quote Request",
      text: name + "\nNumber: " + number + "\nEmail: " + email + "\nMessage: " + message,
    };

    function toParams(data_js: any) {
      var form_data = [];
      for (var key in data_js) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
      }

      return form_data.join("&");
    }

    var params = toParams(data_js);

    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.send(params);
  };

  const onFocusRemoveError = (e: React.FocusEvent<HTMLTextAreaElement, Element>) => {
    e.target.classList.remove("error");
  };

  return (
    <div id="ContactComponent">
      <div className="header">
        <span className="title">Contact Me</span>
        <span className="text">
          Feel free to reach out to me through email or phone, or use the form below to send me a message.
        </span>
        <span className="text-highlight">
          Phone:{" "}
          <a tabIndex={0} href={CONTACT_CONTENT.phone_url}>
            {CONTACT_CONTENT.phone_string}
          </a>
        </span>
        <span className="text-highlight">
          Email:{" "}
          <a tabIndex={0} href={CONTACT_CONTENT.email_url}>
            {CONTACT_CONTENT.email_string}
          </a>
        </span>
      </div>
      <div className="contact-container">
        <textarea
          autoComplete="off"
          onFocus={onFocusRemoveError}
          onChange={(e) => setName(e.target.value)}
          ref={nameElem}
          placeholder={"*Your name"}
        ></textarea>
        <textarea
          autoComplete="off"
          onFocus={onFocusRemoveError}
          onChange={(e) => setNumber(e.target.value)}
          ref={numberElem}
          placeholder={"Your number"}
        ></textarea>
        <textarea
          autoComplete="off"
          onFocus={onFocusRemoveError}
          onChange={(e) => setEmail(e.target.value)}
          ref={emailElem}
          placeholder={"Your email"}
        ></textarea>
        <textarea
          autoComplete="off"
          onFocus={onFocusRemoveError}
          className="message-input"
          onChange={(e) => setMessage(e.target.value)}
          ref={messageElem}
          placeholder={"*Your message here..."}
        ></textarea>
        <button onClick={() => sendMessage()} ref={sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};
