import React from "react";
import "./style.css";
export default function NavBar() {
  return (
    <div>
      <div className="nav-bar">
        <div
          style={{ display: "flex", flexDirection: "row", marginLeft: "58rem" }}
        >
          <p style={{ marginRight: "50px" }}>Home</p>
          <p style={{ marginRight: "50px" }}>Detail</p>
          <p style={{ margin: "auot" }}>Porfolio</p>
        </div>
      </div>
    </div>
  );
}
