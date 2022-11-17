import React from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";
export default function NavBar({ page }) {
  const history = useNavigate();

  return (
    <div>
      <div className="nav-bar">
        <div className="navBar">
          <p
            className={page === "home" ? "nav-current" : "nav-home"}
            onClick={() => history("/")}
          >
            Home
          </p>
          <p
            className={page === "details" ? "nav-detail" : "nav-home"}
            onClick={() => history("/Details")}
          >
            Detail
          </p>
          <p
            className={page === "portfolio" ? "nav-portfolio" : "nav-home"}
            onClick={() => history("/Porfolio")}
          >
            Portfolio
          </p>
        </div>
      </div>
    </div>
  );
}
