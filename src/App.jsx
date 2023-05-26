import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import HeaderMenu from "./component/HeaderMenu";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="bg-light.bg-gradient container-fluid">
        <div className="">
          <BrowserRouter>
            <HeaderMenu />
          </BrowserRouter>
        </div>
      </div>
    </>
  );
};

export default App;
