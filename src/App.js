import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import About from "./components/About";

function App() {
  const [theme, setTheme] = useState("light");
  const [alert, setAlert] = useState(null);
  const [style, setStyle] = useState(null);
  const [textColor, setTextColor] = useState("dark");

  function toggleTheme() {
    setTheme("light");
    setTextColor('dark')

    if (theme === "light") {
      setTheme("dark");
      setTextColor("light");
      displayAlert("success", `theme has been changed to ${theme}`);
      document.body.style.backgroundColor = "rgb(33, 37, 41)";
    }
    
    else if (theme === "dark") {
      setTheme("light");
      setTextColor("dark");
      displayAlert("success", `theme has been changed to ${theme}`);
      document.body.style.backgroundColor = "white";
    }
  }

  function changeStyle(styleName) {
    setTheme(() => null);
    setTextColor(() => null)
    
    if (styleName === "yellow") {

      if (document.body.style.backgroundColor === "#051014") {
        setStyle(() => null);
        setTheme("light");
      }
      
      else {
        setStyle({
          color: "#e2ff91",
        });
        document.body.style.backgroundColor = "#051014"
      }

    }
  }

    function displayAlert(type, message) {
      setAlert({
        type,
        message,
      });

      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }

  return (
    <>
      <Navbar
        title="Text Utils"
        aboutText="About"
        theme={theme}
        text={textColor}
        toggleTheme={toggleTheme}
        changeStyle={changeStyle}
      />

      <Alert alert={alert} />

      <div className="container my-3">
        <TextForm
          heading="Enter the text to analyze"
          textColor={textColor}
          displayAlert={displayAlert}
          style={style}
        />
      </div>

      {/* <div className="mx-3 container">
        <About />
      </div> */}
    </>
  );
}

export default App;
