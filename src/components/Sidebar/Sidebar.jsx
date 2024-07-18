// import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.jpg';
import '../Sidebar/Sidebar.css';

export default function Sidebar() {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 py-5 bg-light d-none d-lg-block"
        id="sidebar-wrapper"
      >
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="text-sidebar my-4">
          <h2 className="fw-bold fs-4">Jackson Ford</h2>
          <span>
            <span className="text-primary">UI/UX/DESIGNER </span> IN PHILIPPINES
          </span>
        </div>
        <ul className="nav flex-column text-uppercase">
          <li className="nav-item">
            <NavLink to="/home" className="nav-link text-black-50" activeClassName="active">
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link text-black-50" activeClassName="active">
              about
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className="nav-link text-black-50" activeClassName="active">
              skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" className="nav-link text-black-50" activeClassName="active">
              experience
            </NavLink>
          </li>
          <li>
            <NavLink to="/work" className="nav-link text-black-50" activeClassName="active">
              Work
            </NavLink>
          </li>
        </ul>
      </div>

      <button
        className="btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#staticBackdrop"
        aria-controls="staticBackdrop"
      >
        <i className="fa-solid fa-bars-staggered fs-1 mb-4 "></i>
      </button>

      <div
        className="offcanvas offcanvas-start"
        data-bs-backdrop="static"
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="d-flex flex-column flex-shrink-0 h-100 bg-light" id="sidebar-wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="text-sidebar my-4">
              <h2 className="fw-bold">Jackson Ford</h2>
              <span>
                <span className="text-primary">UI/UX/DESIGNER </span> IN PHILIPPINES
              </span>
            </div>
            <ul className="nav nav-pills flex-column mb-auto text-uppercase">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link text-black-50" activeClassName="active">
                  home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-link text-black-50" activeClassName="active">
                  about
                </NavLink>
              </li>
              <li>
                <NavLink to="/skills" className="nav-link text-black-50" activeClassName="active">
                  skills
                </NavLink>
              </li>
              <li>
                <NavLink to="/experience" className="nav-link text-black-50" activeClassName="active">
                  experience
                </NavLink>
              </li>
              <li>
                <NavLink to="/work" className="nav-link text-black-50" activeClassName="active">
                  Work
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
