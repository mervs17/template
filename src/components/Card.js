import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
const laura = new URL("../assets/images/laura-smith.png", import.meta.url);
const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener, noreferrer");
};
const openSelf = (url) => {
  window.open(url, "_self");
};
const blank = "_blank";

export default function Card() {
  return (
    <div className="Card">
      <img src={laura} alt="Laura Smith" className="inline-block" />
      <div className="Card__Header">
        <h2>Laura Smith</h2>
        <span className="text-xs text-[#F47D27] dark:text-[#F3BF99] block mb-2">
          Frontend Developer
        </span>
        <a href="#" className="text-[10px] block dark:text-[#F5F5F5]">
          laurasmith.website
        </a>
      </div>
      <div className="Card__Body">
        <div className="sm:flex-row flex flex-col items-center justify-center sm:space-x-4 sm:space-y-0 space-y-3">
          <button
            onClick={() => openSelf("mailto:")}
            className="Button Button--Email"
          >
            <FontAwesomeIcon icon={solid("envelope")} className="text-base" />
            <span>Email</span>
          </button>
          <button
            onClick={() => openInNewTab("https://linkedin.com")}
            className="Button Button--Linkedin"
          >
            <FontAwesomeIcon icon={brands("linkedin")} className="text-base" />
            <span>LinkedIn</span>
          </button>
        </div>
        <div className="Card__Content">
          <h3>About</h3>
          <p className="Card__Paragraph mb-5">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
          <h3>Interests</h3>
          <p className="Card__Paragraph">
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
      <div className="Card__Footer">
        <ul>
          <li>
            <a href="https://www.twitter.com/" target={blank}>
              <FontAwesomeIcon
                icon={brands("twitter-square")}
                className="Card__Icon"
              />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" target={blank}>
              <FontAwesomeIcon
                icon={brands("facebook-square")}
                className="Card__Icon"
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target={blank}>
              <FontAwesomeIcon
                icon={brands("instagram-square")}
                className="Card__Icon"
              />
            </a>
          </li>
          <li>
            <a href="https://www.github.com/" target={blank}>
              <FontAwesomeIcon
                icon={brands("github-square")}
                className="Card__Icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
