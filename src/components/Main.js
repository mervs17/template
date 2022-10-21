import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

var sectionStyle = "md:py-20 py-16 px-8";
export default function Main(props) {
  return (
    <>
    <Navbar />
    <main>
      <section className={sectionStyle}>
        {props.main}
      </section>
    </main>
    <Footer />
    </>
  );
}
