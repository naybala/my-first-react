import React from "react";
import "./Navbar.css"
const imgurl = "https://www.seekpng.com/png/detail/80-803597_io-is-compatible-with-all-javascript-frameworks-and.png"
function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg py-3 fixed-top bg-light">
        <div class="container">
          <img
            src={imgurl}
            class="img-fluid"
            alt=""
          />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a href="#document" class="nav-link">Document</a>
              </li>
              <li class="nav-item">
                <a href="#usage" class="nav-link">Usage</a>
              </li>
              <li class="nav-item">
                <a href="#installation" class="nav-link">Installation</a>
              </li>
              <li class="nav-item">
                <a href="#pratical" class="nav-link">Pratical</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;