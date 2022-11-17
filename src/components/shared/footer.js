import React from "react";
import "../style.css";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-inner">
          <a
            href="https://www.instagram.com/redietgirma___/"
            style={{ textDecoration: "none", color: "pink" }}
          >
            <BsInstagram className="insta" />
          </a>
          <a
            href="https://www.linkedin.com/in/rediet-girma-795b80184/"
            style={{ textDecoration: "none", color: "pink" }}
          >
            <BsLinkedin className="linkedin" />{" "}
          </a>
          <a
            href="https://github.com/redietGirma"
            style={{ textDecoration: "none", color: "pink" }}
          >
            <FaGithub className="github" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
