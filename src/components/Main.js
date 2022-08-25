import React from "react";
import IntroContent from "./IntroContent";
import Card from "./Card";

var sectionStyle = "md:py-20 py-16 px-8";

export default function Main() {
  return (
    <main>
      <section className={sectionStyle}>
        <IntroContent />
      </section>

      <section className={sectionStyle}>
        <div className="container xl:max-w-screen-xl mx-auto">
          <Card />
        </div>
      </section>
    </main>
  );
}
