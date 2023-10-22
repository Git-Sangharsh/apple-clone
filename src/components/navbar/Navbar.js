import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faAppleAlt,
  faArrowRight,
  faSearch,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdownLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="Navbar">
      <div className="navbar-content-hold">
        <li>
          <FontAwesomeIcon className="fontawesome-style" icon={faAppleAlt} />
        </li>
        <li className="hide-nav ">
          <Link to='/store'>
            <a href="#">Store</a>
          </Link>
        </li>
        <li className="hide-nav ">
          <a href="#">Mac</a>
        </li>
        <li className="hide-nav">
          <a href="#">iPad</a>
        </li>
        <li className="hide-nav">
          <a href="#">iPhone</a>
        </li>
        <li className="hide-nav">
          <a href="#">Watch</a>
        </li>
        <li className="hide-nav">
          <a href="#">Vision</a>
        </li>
        <li className="hide-nav">
          <a href="#">AirPods</a>
        </li>
        <li className="hide-nav">
          <a href="#">TV & Home</a>
        </li>
        <li className="hide-nav">
          <a href="#">Entertainment</a>
        </li>
        <li className="hide-nav">
          <a href="#">Accessories</a>
        </li>
        <div className="last-content">
          <li>
            <FontAwesomeIcon
              className="fontawesome-style"
              icon={faSearch}
              onClick={toggleDropdown}
            />
            <li onMouseLeave={toggleDropdownLeave} style={{ margin: "0px" }}>
              {isDropdownOpen && (
                <div className="data" style={{ backdropFilter: "blur(700px)" }}>
                  <h1>
                    <FontAwesomeIcon className="apple-font" icon={faSearch} />{" "}
                    <input
                      type="text"
                      className="apple-text"
                      placeholder="Search apple.com"
                    />
                  </h1>
                  <li className="data-li">
                    {" "}
                    <FontAwesomeIcon
                      className="arrow-right"
                      icon={faArrowRight}
                    />{" "}
                    Find A Store
                  </li>
                  <li className="data-li">
                    {" "}
                    <FontAwesomeIcon
                      className="arrow-right"
                      icon={faArrowRight}
                    />{" "}
                    Apple Vision Pro
                  </li>
                  <li className="data-li">
                    {" "}
                    <FontAwesomeIcon
                      className="arrow-right"
                      icon={faArrowRight}
                    />
                    AirPods
                  </li>
                  <li className="data-li">
                    {" "}
                    <FontAwesomeIcon
                      className="arrow-right"
                      icon={faArrowRight}
                    />
                    AirTags
                  </li>
                  <li className="data-li">
                    {" "}
                    <FontAwesomeIcon
                      className="arrow-right"
                      icon={faArrowRight}
                    />
                    Apple Trade In
                  </li>
                </div>
              )}
            </li>
            <li className="fontawesome-style">
              <FontAwesomeIcon icon={faShoppingBag} />
            </li>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
