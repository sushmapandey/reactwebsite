import React from "react";
import ComponentHA from "./ComponentHA";
import homeImg from "../image/home.svg";

function Home(props) {
  return (
    <>
      <ComponentHA
        name="home page"
        details="We are team of talented development making website"
        image={homeImg}
      />
    </>
  );
}

export default Home;
