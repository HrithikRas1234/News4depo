import React from "react";
import { Link } from "react-router-dom";


const Navbar = (props) => {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            News4U
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Technology">
                  Technology
                </Link>
              </li>

              <div class="dropdown">
                <a
                  class="btn btn-secondary dropdown-toggle"
                  href="/"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  More
                </a>

                <div
                  class="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                  style={{ color: "Green", backgroundColor: "#ceb4b4" }}
                >
                  <a className="dropdown-item" href="/">
                      <button
                        type="button"
                        className="btn"
                        style={{ color: "Green" }}
                      >
                       India
                      </button>
                  </a>
                  <a class="dropdown-item" href="/">
                    <button
                      type="button"
                      class="btn"
                      style={{ color: "Green" }}
                    >
                      French
                    </button>
                  </a>
                  <a class="dropdown-item" href="/">
                    <button
                      type="button"
                      class="btn"
                      style={{ color: "Green" }}
                    >
                      United Kingdom
                    </button>
                  </a>
                  <a class="dropdown-item" href="/">
                    <button
                      type="button"
                      class="btn"
                      style={{ color: "Green" }}
                    >
                      Russia
                    </button>
                  </a>
                  <a class="dropdown-item" href="/">
                    <button
                      type="button"
                      class="btn"
                      style={{ color: "Green" }}
                    >
                      Germany
                    </button>
                  </a>
                  <a class="dropdown-item" href="/">
                    <button
                      type="button"
                      class="btn"
                      style={{ color: "Green" }}
                    >
                      Austria
                    </button>
                  </a>
                  <a class="dropdown-item" href="/">
                    <button
                      type="button"
                      class="btn"
                      style={{ color: "Green" }}
                    >
                      United State
                    </button>
                  </a>
                </div>
              </div>
              <h3>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">
                    About
                  </Link>
                </li>
              </h3>
            </ul>

            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="Checkbox" id="flexSwitchCheckChecked" style={{ width: '320px' }}/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked" style={{ color: '#0b0b0c'}}>Enable DarkMode</label>
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
