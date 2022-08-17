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

var themeToggleDarkIcon = document.getElementsByClassName(
  "Toggle__switch--dark"
)[0];
var themeToggleLightIcon = document.getElementsByClassName(
  "Toggle__switch--light"
)[0];

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("Toggle__switch--light");
} else {
  themeToggleDarkIcon.classList.remove("Toggle__switch--dark");
}

var themeToggleBtn = document.getElementById("toggleSwitch");

themeToggleBtn.addEventListener("click", function () {
  themeToggleDarkIcon.classList.toggle("Toggle__switch--dark");
  themeToggleLightIcon.classList.toggle("Toggle__switch--light");

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
