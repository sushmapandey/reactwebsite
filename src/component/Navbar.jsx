import React from "react";
import { NavLink } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light menu_link">
        <div class="container-fluid">
          <NavLink to="/">
            <img
              src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...KDpR9Inx...FwXs1M3EMoAJtligpj...ts9fs7 "
              width={100}
            />
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink
                to="/"
                className={({ isActive, notActive }) =>
                  isActive ? "ActiveClass nav-link" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  isActive ? "ActiveClass nav-link" : "nav-link"
                }
              >
                Service
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "ActiveClass nav-link" : "nav-link"
                }
              >
                About
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "ActiveClass nav-link" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
