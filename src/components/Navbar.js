import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={props.style}>
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>as
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" style={props.style}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={props.style}>
                  {props.aboutText}
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form> */}

            <div className="btn-group mx-3">
              <button type="button" className="btn" onClick={() => props.changeStyle('yellow')}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="rgb(218, 245, 66)"
                  className="bi bi-square-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z"></path>
                </svg>
                <span className="visually-hidden">Button</span>
              </button>
            </div>

            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleTheme}
              />
              <label
                className={`form-check-label text-${props.textColor}`}
                htmlFor="flexSwitchCheckDefault"
                style={props.style}
              >
                Change Theme
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  // protoTypes are used to make sure the value passed is in the format we want it to be.
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Insert title here", // default value of props
  aboutText: "Insert about text here",
};
