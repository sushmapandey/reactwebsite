import React from "react";
import ComponentHA from "./ComponentHA";
import aboutImg from "../image/about.png";

function About() {
  return (
    <>
      <ComponentHA
        name="About Page"
        details="We are team of talented development making website"
        image={aboutImg}
      />
    </>
  );
}

export default About;
