import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Servicenav() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prevDropdownOpen) => !prevDropdownOpen);
  };
  return (
    <div class="service-nav">
      <header className="contactus-navbar">
        <nav className="contactus-nav-container">
          <div className="logo"></div>

          <div
            className={`hamburger ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`nav-menu ${isOpen ? "active" : ""}`} id="nav-links">
            <li>
              <Link
                to="/home"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#services"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
            </li>

            {/* Dropdown for Company */}
            <li
              className="dropdown"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <span className="nav-link">Case Studies</span>
              <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                {/* <li>
                  <Link
                    to="/about"
                    className="dropdown-link"
                    onClick={() => setIsOpen(false)}
                  >
                    CaseStudies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/company-policy"
                    className="dropdown-link"
                    onClick={() => setIsOpen(false)}
                  >
                    Company Policy
                  </Link>
                </li> */}
              </ul>
            </li>

            <li>
              <Link
                to="/ Contact"
                className="Contact"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/Get Quote"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
               Get Quote
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div class="Service-nav-main">
        <div className="stars"></div>
        <div class="service_content">
          <h1>
            Transformative Solutions
            <br />
            Tailored to Your Needs
          </h1>
          <p>
            Providing personalized technology solutions designed to
            <br /> optimize your business operations and drive innovation
            <br />
            forward.
          </p>
        </div>
      </div>
    </div>
  );
}