import React from "react";
import IntroContent from "./IntroContent";
import Card from "./Card";

export default function Main() {
  return (
    <main>
      <section className="md:py-20 py-16 px-8">
        <IntroContent />
      </section>

      <section className="md:pb-20 pb-16 px-8">
        <div className="container xl:max-w-screen-xl mx-auto">
          <Card />
        </div>
      </section>
    </main>
  );
}
