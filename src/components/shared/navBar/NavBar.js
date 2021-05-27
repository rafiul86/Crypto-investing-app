import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import './navBar.css';
import { Link } from "react-router-dom";
import brand from '../../../images/brand.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  return (
    <div>
      <Navbar
        sticky="fixed-top"
        collapseOnSelect
        expand="lg"
        className="nav-design"
      >
        <img className="brand-design" src={brand}/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div>
          <FontAwesomeIcon className="icon-container" icon={faTwitter} />
          <FontAwesomeIcon className="icon-container" icon={faFacebook} />
          <FontAwesomeIcon className="icon-container" icon={faLinkedin} />
          <FontAwesomeIcon className="icon-container" icon={faInstagram} />
          </div>
          <Nav className="mr-auto">
            <Link className="nav-container" to="/main">
            Home
            </Link>
            <Link className="nav-container" to="/home">
              Incubator
            </Link>
          </Nav>
          <Nav>
            <Link className="nav-container" to="/learn">
              Learn
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
