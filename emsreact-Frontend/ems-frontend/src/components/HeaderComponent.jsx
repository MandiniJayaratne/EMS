import React from "react";
import { Link } from "react-router-dom";
import ContactComponent from "./ContactComponent";

const HeaderComponent = ({ toggleContactForm }) => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand">ODev Solutions</a>
          <div className="ml-auto">
            <Link to="/" className="btn btn-outline-light mx-2">
              Home
            </Link>
            <a
              href="https://calendar.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light mx-2"
            >
              View Calendar
            </a>
            <Link to="/contact" className="btn btn-outline-light mx-2">
              Contact
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
