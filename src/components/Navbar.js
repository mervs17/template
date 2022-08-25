import React from "react";
import ToggleDarkMode from "./ToggleDarkMode";
const logo = new URL("../images/reactjs-icon.png", import.meta.url);

export default function Navbar() {
  return (
    <header className="Header">
      <nav className="Header__Nav">
        <div className="Header__Logo-Wrapper">
          <img src={logo} className="inline-block" />
          <span className="Header__Logo-Name">ReactFacts</span>
        </div>
        <div className="Header__Toggle">
          <ToggleDarkMode />
        </div>
      </nav>
    </header>
  );
}
