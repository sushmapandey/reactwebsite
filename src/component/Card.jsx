import React from "react";

function Card(props) {
  return (
    <div className="card mx-auto" style={{ width: "18rem" }}>
      <img
        src={props.img}
        className="card-img-top overflow-hidden"
        alt="card image"
        style={{ maxHeight: "190px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text line-clamp">{props.details}</p>
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  );
}

export default Card;
