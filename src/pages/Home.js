import React from "react";
import IntroContent from "../components/IntroContent";
import Main from "../components/Main";

export default function Home() {
  return <Main main={<IntroContent />} />;
}
