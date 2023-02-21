import React from "react";
import "../css/footer.css";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <footer>
      <div className="logo">
        <h1>VYOAM</h1>
        <h4>An AI & Embedded Solutions</h4>

        <div className="social_media">
          <a href="/" target={"_blank"}>
            <FaFacebookF size={42} />
          </a>
          <a href="/" target={"_blank"}>
            <FaTwitter size={42} />
          </a>
          <a href="/" target={"_blank"}>
            <FaLinkedin size={42} />
          </a>
          <a href="/" target={"_blank"}>
            <FaWhatsapp size={42} />
          </a>
        </div>
      </div>

      <div className="quick_links">
        <h2>Quick Links</h2>
        <a href="/">Home</a>
        <a href="/">Corporate training</a>
        <a href="/">Courses</a>
        <a href="/">About Us</a>
        <a href="/">Career</a>
        <a href="/">Blog</a>
      </div>

      <div className="find_us">
        <h2>Find us</h2>
        <div className="find_us__tags">
          <MdLocationPin style={{ marginRight: "1.5rem" }} size={20} />
          <p>No 39, 3rd Cross Street, Lakshmi Nagar, Porur, Chennai - 600116</p>
        </div>

        <div className="find_us__tags">
          <FaPhoneAlt style={{ marginRight: "1.5rem" }} size={20} />
          <p>+91 98415-57655 </p>
          <p>+91 94866-07655</p>
        </div>

        <div className="find_us__tags">
          <IoMdMail style={{ marginRight: "1.5rem" }} size={20} />
          <p>services@vyoam.com &nbsp;</p>
          <p>vyoamtech@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
