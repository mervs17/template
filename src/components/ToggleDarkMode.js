import React from "react";

export default function DarkMode() {
  var toggleS = "Toggle__Switch";
  return (
    <div className="Toggle">
      <p className="Toggle__Text Toggle--Light">Light</p>
      <div
        id="toggleSwitch"
        className={`${toggleS}--Light Toggle__Switch--Dark`}
      ></div>
      <p className="Toggle__Text Toggle--Dark">Dark</p>
    </div>
  );
}
