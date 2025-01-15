import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom';

function UserNavbar() {
  return (
    <>
  
      <div className="container">
        <div className="navbarTop">
          <div className="socialMedia">
            <FaInstagram />
            <CiTwitter />
            <FaFacebookF />
            <FaLinkedinIn />
          </div>
          <div className="contact">
            <FaPhoneAlt /> <span>(+1) 2345 6789 010</span>
            <SiGmail /> <span>shop@yourdomain.com</span>
          </div>
        </div>
      </div>

      
      <div className="navbarBottom">
        <div className="container">
          <div className="brand">Selling<span>.</span></div>
          <div className="navLinks">
            <Link to={""}>Home</Link>
            <Link to={"/addproducts"}>Add Products</Link>
            <a href="#about">About Us</a>
            <a href="#special">Special</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserNavbar;
