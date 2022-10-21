import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center">
        <section className="md:py-16 px-8 py-12">
          <div className="container xl:max-w-screen-xl mx-auto">
            <h1 className="text-center">404 Page Not Found</h1>
            <div className="text-center mt-10">
              <Link
                to="/"
                className="md:text-xl text-lg bg-primary px-12 py-3 rounded-full border-solid border border-primary transition hover:bg-transparent"
              >
                Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
