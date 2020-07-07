import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div class="container">
          <a class="navbar-brand" href="landing.html">
            <img
              className="nav-logo"
              src={require('../../assets/brotherhood-global-foundationns.png')}
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="mobile-nav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item mx-2">
                <a class="nav-link" href="register.html">
                  HOME
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="login.html">
                  ABOUT
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="login.html">
                  BLOGS
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="login.html">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
