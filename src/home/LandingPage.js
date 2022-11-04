import React from "react";
import red from "../assets/profilePic.jpg";
import logo from "../assets/rediet-girma-logo.png";

import background from "../assets/hd-wallpaper-g869113c95_1920.jpg";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
export default function LandingPage() {
  return (
    <div>
      <NavBar />
      <div
        style={{
          margin: "auto",
          display: "flex",
          padding: "5rem 0rem 4rem 15rem",
          background: "black",
        }}
      >
        <div style={{ margin: "3rem" }}>
          <img
            style={{
              width: "12rem",
              height: "17rem",
              border: "2px solid pink",
              borderRadius: "50%",
              boxShadow: "",
            }}
            src={red}
            alt="loading.."
          />
        </div>
        <div>
          <p
            style={{
              color: "pink",
              fontStyle: "oblique",
              fontSize: "17px",
              marginRight: "16rem",
              paddingTop: "5rem",
            }}
          >
            A detail ethusiast frontend developer based in Addis Ababa,
            Ethiopia. With 4 years experience in various JavaScript frameworks
            like angular 8 and react js, I am able to design and develop highly
            optimized and modern software that are easily ready for maintaining,
            customization and any future cross-platform integrations. Well
            versed with backend technologies like Node.js and multiple database
            management tools like mysql, postgresql and mongoDB.
          </p>
        </div>
      </div>
      <div
        style={{
          color: "pink",
          padding: "0rem 0rem 1rem 17rem",
        }}
      >
        <p style={{ fontSize: "30px" }}> Education</p>
        <p style={{ fontSize: "25px", marginTop: "-2rem" }}>
          {" "}
          Electrical and computer engineering Degree{" "}
        </p>
        <p style={{ fontSize: "20px", marginTop: "-2rem" }}>
          Adama science and technology university
        </p>
        <p style={{ fontSize: "10px", marginTop: "-1rem" }}>
          Oct 2013 - July 2018
        </p>
        <div style={{ marginTop: "2rem" }}>
          <p style={{ fontSize: "30px", marginTop: "-2rem" }}>
            {" "}
            Node.js Backend development certification{" "}
          </p>
          <p style={{ fontSize: "20px", marginTop: "-2rem" }}>Gebeya .inc</p>
          <p style={{ fontSize: "10px", marginTop: "-1rem" }}>
            June 2019 - Nov 2019
          </p>
        </div>
      </div>
      <div
        style={{
          margin: "auto",
          display: "flex",
          padding: "5rem 0rem 4rem 17rem",
          background: "black",
        }}
      >
        {" "}
      </div>
      <Footer />
    </div>
  );
}
