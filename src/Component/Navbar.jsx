import React from "react";
import "./Navbar.css"
const imgurl = "https://www.seekpng.com/png/detail/80-803597_io-is-compatible-with-all-javascript-frameworks-and.png"
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg py-3 fixed-top bg-light">
        <div className="container">
          <img
            src={imgurl}
            className="img-fluid rounded-2"
            alt=""
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#document" className="nav-link">Document</a>
              </li>
              <li className="nav-item">
                <a href="#usage" className="nav-link">Usage</a>
              </li>
              <li className="nav-item">
                <a href="#installation" className="nav-link">Installation</a>
              </li>
              <li className="nav-item">
                <a href="#pratical" className="nav-link">Pratical</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br /><br /><br />
      <br /><br /><br /> <br />
    </>
  )
}

export default Navbar;