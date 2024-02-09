import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [colour, setColour] = useState("");
  const onclick = async () => {
    let [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript<string[], void>({
      target: { tabId: tab.id! },
      args: [colour],
      func: (colour) => {
        document.body.style.backgroundColor = colour;
      },
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2 style={{ textAlign: "center" }}>Background color chager</h2>
      <div className="card"></div>
      <p className="read-the-docs" style={{margin:"10px"}}>
      
A background color changing Chrome extension allows users to personalize web page backgrounds with a simple click.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <input
          type="color"
          onChange={(e) => setColour(e.currentTarget.value)}
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <button onClick={() => onclick()} style={{ backgroundColor: "blue" }}>
          {" "}
          change color
        </button>
      </div>
    </>
  );
}

export default App;
