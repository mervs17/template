import React, { useState } from "react";
import ToggleDarkMode from "./ToggleDarkMode";
import { Link, NavLink } from "react-router-dom";
const logo = new URL("../assets/images/logo.png", import.meta.url);
var classNames = require("classnames");

export default function Navbar() {
  const [hamburger, setHamburger] = useState(false);

  var btnClass = classNames("Header__NavLink", hamburger ? "show" : "");

  return (
    <header className="Header">
      <nav className="Header__Nav">
        <Link to="/" className="Header__Logo-Wrapper">
          <img src={logo} className="inline-block" />
          <span className="Header__Logo-Name">Mervin</span>
        </Link>

        <div className="Header__Toggle">
          <button
            onClick={() => setHamburger((prevHam) => !prevHam)}
            type="button"
            className="Header__Hamburger"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className={btnClass}>
            <ul>
              <li>
                <NavLink to="/" end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </div>
          <ToggleDarkMode />
        </div>
      </nav>
    </header>
  );
}
