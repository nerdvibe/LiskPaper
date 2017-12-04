import React, { Component } from "react";
import logo from "./logo_w.png";
import { Offline, Online } from "react-detect-offline";
import { Link } from "react-router-dom";

class Head extends Component {
  render() {
    return (
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                <img src={logo} alt="Logo" />
              </Link>
              <span
                className="navbar-burger burger"
                data-target="navbarMenuHeroB"
              >
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenuHeroB" className="navbar-menu">
              <div className="navbar-end">
                <Link to="/how-it-works" className="navbar-item">
                  What is a paper wallet?
                </Link>
                <span className="navbar-item">
                  <Offline>
                    <p className="has-text-success">
                      <strong>Offline</strong>
                    </p>
                  </Offline>
                  {!window && window.process && window.process.type
                    ? <Online>
                        <Link to="https://github.com/xunga/LiskPaper/releases/tag/1.0.0" className="button is-info is-inverted">
                          <span>Download and use it offline</span>
                        </Link>
                      </Online>
                    : <p className="has-text-success">
                        <strong>Online</strong>
                      </p>}
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Head;
