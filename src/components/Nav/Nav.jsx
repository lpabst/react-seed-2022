import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./nav.scss";

function Nav() {
  return (
    <div className={`flexRow nav`}>
      <div className={`flexRow`}>
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <div className={`flexRow links`}>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
