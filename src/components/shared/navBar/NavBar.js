import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import './navBar.css';
import { Link } from "react-router-dom";
import brand from '../../../images/brand.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


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
          <Tippy content="Main menu">
            <Link className="nav-container" to="/main">
            Home
            </Link>
            </Tippy>
            <Tippy content="click to view startups">
            <Link className="nav-container" to="/home">
              Incubator
            </Link>
            </Tippy>
          </Nav>
          <Nav>
          <Tippy content="view our courses">
            <Link className="nav-container" to="/learn">
              Learn
            </Link>
            </Tippy>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
