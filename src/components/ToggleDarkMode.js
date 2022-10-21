import React, { useState, useEffect } from "react";
import classNames from "classnames";

export default function DarkMode() {
  const toggleS = "Toggle__Switch";

  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem("site-dark-mode")) || true
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
    console.log("Dark Mode:", darkMode);
  }, [darkMode]);

  return (
    <div className="Toggle">
      <p className="Toggle__Text Toggle--Light">Light</p>
      <div
        onClick={() => setDarkMode((prevDarkMode) => !prevDarkMode)}
        className={classNames(
          toggleS,
          !darkMode ? `${toggleS}--Light` : `${toggleS}--Dark`
        )}
      ></div>
      <p className="Toggle__Text Toggle--Dark">Dark</p>
    </div>
  );
}
