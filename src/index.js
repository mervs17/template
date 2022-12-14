import "./main.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

if (process.env.NODE_ENV !== "production") {
  const style = [
    "color: lightblue;",
    "font-size: 30px;",
    "font-weight: bold",
    "-webkit-text-stroke: 1px black;",
  ];
  console.log("%cLooks like we are in development mode!", style.join(";"));
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
