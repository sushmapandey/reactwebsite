import React from "react";
import Card from "./Card";
import servicedata from "./servicedata";

function Service() {
  return (
    <>
      <div className="row">
        {servicedata.map((items) => (
          <div className="col-12 col-sm-2 col-md-3 col-lg-4 g-5">
            <Card
              img={items.image}
              title={items.title}
              details={items.detail}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Service;
