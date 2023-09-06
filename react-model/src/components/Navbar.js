import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import logo from "../Aserts/kisspng-unique-influence-logo-mau-2018-business-brand-influence-5b212fc59b3f47.9238969315289015736359.png";
const Navbar = () => {
  const [showList, setShowList] = useState(true);
  const showNavList = () => {
    setShowList(false);
  };
  const hideNavlist = () => {
    setShowList(true);
  };
  return (
    <nav className="nav-bar">
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        {showList && (
          <button onClick={showNavList} className="bar">
            <FontAwesomeIcon icon={faBars} />{" "}
          </button>
        )}
        {!showList && (
          <button onClick={hideNavlist} className="cencel">
            <FontAwesomeIcon icon={faXmark} />
          </button>
        )}
        <div className="nav-list-lg">
          <Link to="/">Home</Link>
          <Link to="/modal">Modal</Link>
          <Link to="/cards">Cards</Link>
          <Link to="/carousel">Carousel</Link>
          <Link to="/imageGallary">ImageGallery</Link>
        </div>
      </div>
      {!showList && (
        <div className="nav-list-sm">
          <Link to="/">Home</Link>
          <Link to="/modal">Modal</Link>
          <Link to="/cards">Cards</Link>
          <Link to="/carousel">Carousel</Link>
          <Link to="/imageGallary">ImageGallery</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
