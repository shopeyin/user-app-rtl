import React from "react";
import { useNavigate, NavLink, Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <NavLink className="navbar-brand ml-3" to="/">
          Home
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div id="links">
                <p>
                  {" "}
                  <Link
                    to="/people"
                    data-target="#navbarNav"
                    className="link-color"
                  >
                    {" "}
                    People
                  </Link>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
