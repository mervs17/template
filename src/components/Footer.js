import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-16">
      <div className="absolute bottom-0 inset-x-0 bg-tertiary dark:bg-secondary p-5 text-center text-black dark:text-white">
        <small>&copy; {year} Reyes development. All rights reserved.</small>
      </div>
    </footer>
  );
}
