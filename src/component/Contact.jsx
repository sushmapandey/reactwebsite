import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Contact() {
  const [value, setValue] = useState({
    fName: "",
    phone: "",
    email: "",
    msg: "",
  });
  const inputChange = (event) => {
    const { name, value } = event.target;
    setValue((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${value.fName}, phone number is ${value.phone} and my email is ${value.email}. here what I want to say ${value.msg}`
    );
  };
  return (
    <>
      <form
        className="row g-3 mx-auto border shadow-sm my-5 p-4"
        style={{ maxWidth: "500px" }}
        onSubmit={formSubmit}
      >
        <div className="col-12">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="full Name"
            value={value.fName}
            onChange={inputChange}
            name="fName"
            required
          />
        </div>
        <div className="col-md-12">
          <label className="form-label">Phone</label>
          <input
            type="number"
            className="form-control"
            value={value.phone}
            onChange={inputChange}
            name="phone"
            placeholder="phone number"
            required
          />
        </div>
        <div className="col-md-12">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={value.email}
            onChange={inputChange}
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="col-12">
          <label className="form-label">Message</label>
          <textarea
            type="text"
            className="form-control"
            value={value.msg}
            onChange={inputChange}
            name="msg"
            placeholder="Message"
            rows={3}
            required
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-outline-info">
            Sign in
          </button>
        </div>
      </form>
    </>
  );
}

export default Contact;
