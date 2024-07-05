import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const [copyBtnText, setBtnText] = useState("Copy Text");

  function onChange(event) {
    // console.log("Changed");
    setText(event.target.value);
  }

  function toUpperCase() {
    let UpperCase = text.toUpperCase();
    setText(UpperCase);
    props.displayAlert("success", "text changed to Uppercase");
  }

  function toLoweCase() {
    let LowerCase = text.toLowerCase();
    setText(LowerCase);
    props.displayAlert("success", "text changed to LowerCase");
  }

  function clearText() {
    setText("Enter text here");
    props.displayAlert("info", "text cleared");
  }

  function toCamelCase() {
    setText(
      text
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
          return index == 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, "")
    );
  }

  function copyText() {
    navigator.clipboard.writeText(text);
    setBtnText("Copied!");
    setTimeout(() => {
      setBtnText("Copy");
    }, 1300);
  }

  // function findAndReplace() {
  //   let textArr = text.split(" ")
  //   textArr.forEach((text, index) => {
  //     if
  //   })
  // }

  console.log(props.textColor);

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1 className={`text-${props.textColor}`} style={props.style}>
            {props.heading}
          </h1>
          <label
            htmlFor="textBox"
            className={`form-label text-${props.textColor}`}
            style={props.style}
          >
            Example textarea
          </label>
          <textarea
            className={`form-control`}
            id="textBox"
            rows="3"
            value={text}
            onChange={onChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={clearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={toLoweCase}>
          To LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={toUpperCase}>
          To UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={toCamelCase}>
          To CamelCase
        </button>
        <button className="btn btn-primary mx-1" onClick={copyText}>
          {copyBtnText}
        </button>
      </div>
      <div className="container my-3">
        <h1 style={props.style} className={`text-${props.textColor}`}>
          Text Summary
        </h1>
        <p style={props.style} className={`text-${props.textColor}`}>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p style={props.style} className={`text-${props.textColor}`}>
          Reading Time: {0.004 * text.split(" ").length} min(s)
        </p>
        <h3 style={props.style} className={`text-${props.textColor}`}>
          Preview
        </h3>
        <p style={props.style} className={`text-${props.textColor}`}>
          {text}
        </p>
      </div>
    </>
  );
}
