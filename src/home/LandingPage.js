import React from "react";
import red from "../assets/profilePic.jpg";
import ehpmd from "../assets/ehpmd.jpg";

import mfr from "../assets/mfr_.jpg";

import fanos from "../assets/fanos.jpg";
import "./style.css";

import background from "../assets/hd-wallpaper-g869113c95_1920.jpg";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/footer";
import { useNavigate } from "react-router-dom";
export default function LandingPage() {
  const history = useNavigate();
  return (
    <div>
      <NavBar page={"home"} />
      <div className="main">
        <div style={{ margin: "3rem" }}>
          <img className="prof-img" src={red} alt="loading.." />
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
            A detailed professional frontend developer based in Addis Ababa,
            Ethiopia. With 4 years experience in various JavaScript frameworks
            like angular and react js, I am able to design and develop highly
            optimized and modern software that are easily ready for maintaining,
            customization and any future cross-platform integrations. Well
            versed with backend technologies like Node.js and multiple database
            tools like mysql, postgresql and mongoDB.
          </p>
        </div>
      </div>
      <div
        style={{
          color: "#feedf0",
          padding: "0rem 0rem 1rem 23rem",
        }}
      >
        <p style={{ fontSize: "30px" }}> Education</p>
        <p style={{ fontSize: "25px", marginTop: "-1rem" }}>
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
          <p style={{ fontSize: "25px", marginTop: "-2rem" }}>
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
          textAlign: "center",
          background: "black",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#feedf0",
            margin: "auto",
          }}
        >
          <p
            style={{
              fontSize: "30px",
              textAlign: "center",
              marginTop: "6rem",
              color: "pink",
            }}
          >
            {" "}
            Selected Work
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ margin: "1rem" }}>
              <img
                style={{
                  width: "23rem",
                  height: "12rem",
                  border: "1px solid pink",
                  boxShadow: "",
                }}
                src={ehpmd}
                alt="loading.."
              />
            </div>
            <div style={{ margin: "1rem" }}>
              <img
                style={{
                  width: "23rem",
                  height: "12rem",
                  border: "1px solid pink",
                  boxShadow: "",
                }}
                src={mfr}
                alt="loading.."
              />
            </div>
            <div style={{ margin: "1rem" }}>
              <img
                style={{
                  width: "23rem",
                  height: "12rem",
                  border: "1px solid pink",
                  boxShadow: "",
                }}
                src={fanos}
                alt="loading.."
              />
            </div>
          </div>
          <button className="more-button" onClick={() => history("/Details")}>
            More
          </button>
        </div>{" "}
      </div>

      <Footer />
    </div>
  );
}
