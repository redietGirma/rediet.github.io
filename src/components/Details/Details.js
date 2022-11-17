import React from "react";
import NavBar from "../shared/NavBar";
import Footer from "../shared/footer";
function Details() {
  return (
    <div>
      <NavBar page={"details"} />
      <div
        style={{
          background: "black",
          margin: "0",
          padding: "0",
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="main">
          {" "}
          <div style={{ color: "white" }}>
            {" "}
            <div>Work Experience</div>
            <div>
              John Snow Inc. (Digital health activation)
              <div>December 2019 - present</div>
            </div>
          </div>{" "}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Details;
