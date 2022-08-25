import "./main.scss";
import React from "react";
import ReactDOM from "react-dom";
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

ReactDOM.render(<App />, document.getElementById("root"));

const toggleDark = "Toggle__Switch--Dark";
const toggleLight = "Toggle__Switch--Light";

var themeToggleDarkIcon = document.getElementsByClassName(toggleDark)[0];
var themeToggleLightIcon = document.getElementsByClassName(toggleLight)[0];

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove(toggleLight);
} else {
  themeToggleDarkIcon.classList.remove(toggleDark);
}

var themeToggleBtn = document.getElementById("toggleSwitch");

themeToggleBtn.addEventListener("click", function () {
  themeToggleDarkIcon.classList.toggle(toggleDark);
  themeToggleLightIcon.classList.toggle(toggleLight);

  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});
