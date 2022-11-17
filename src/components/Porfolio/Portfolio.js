import React from "react";
import NavBar from "../shared/NavBar";
import Footer from "../shared/footer";

function Porfolio() {
  return (
    <div>
      <NavBar page={"portfolio"} />
      <div
        style={{
          background: "black",
          margin: "0",
          padding: "0",
          width: "100%",
          height: "100vh",
        }}
      ></div>
      <Footer />
    </div>
  );
}

export default Porfolio;
