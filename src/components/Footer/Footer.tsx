import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.scss";
const logo = require('../../assets/images/logo.png');

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content container">
        <div className="footer__content__logo">
          <img src={logo} alt="" />
          <Link to="/">Tix Movie</Link>
        </div>

        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">Term of Services</Link>
            <Link to="/">About Us</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Privacy Policy</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">You must watch</Link>
            <Link to="/">Recent Release</Link>
            <Link to="/">Top IMDB</Link>
            <Link to="/">About Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
