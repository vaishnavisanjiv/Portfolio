import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
      <div className="container-fluid">
        <span className="navbar-brand">Vaishnavi Patil</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#skills" className="nav-link">
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
