import React from "react";

function ComponentHA(props) {
  return (
    <>
      <div
        className="row justify-content-center align-content-center"
        style={{ minHeight: "75vh" }}
      >
        <div className="col-12 col-lg-6 order-2 order-lg-1">
          <div className="d-flex flex-column justify-content-center align-content-center h-100">
            <h1 className="fs-3">
              Welcome to {props.name}
              <span className="font-bold text-capitalize gradient-color d-block fs-1">
                Sushma
              </span>
            </h1>
            <p>{props.details}</p>
            <button
              className="btn btn-outline-info rounded-3"
              style={{ width: "150px" }}
            >
              Connect Here
            </button>
          </div>
        </div>
        <div className="col-12 col-lg-6 text-end order-1 order-lg-2 my-4">
          <img
            src={props.image}
            alt="image"
            className="img-fluid animated"
            width={500}
          />
        </div>
      </div>
    </>
  );
}

export default ComponentHA;
