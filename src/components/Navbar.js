import React from "react";
import DarkMode from "./DarkMode";

const logo = new URL("../images/reactjs-icon.png", import.meta.url);

export default function Navbar() {
  return (
    <header className="bg-slate-500 dark:bg-secondary px-6 py-8">
      <nav className="xl:max-w-screen-xl container mx-auto sm:flex sm:space-y-0 space-y-2 justify-between">
        <div className="flex items-center space-x-2">
          <img src={logo} className="inline-block" />
          <span className="md:text-[22.25px] text-lg text-react-blue font-bold tracking-tighter">
            ReactFacts
          </span>
        </div>
        <div className="flex flex-wrap items-center space-x-4">
          <p className="font-semibold text-base text-tertiary">
            React Course - Project 1
          </p>
          <DarkMode />
        </div>
      </nav>
    </header>
  );
}
