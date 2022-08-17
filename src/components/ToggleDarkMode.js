import React from "react";

export default function DarkMode() {
  return (
    <div className="Toggle">
      <p className="Toggle__text Toggle--light">Light</p>
      <div
        id="toggleSwitch"
        className="Toggle__switch--light Toggle__switch--dark"
      ></div>
      <p className="Toggle__text Toggle--dark">Dark</p>
    </div>
  );
}
