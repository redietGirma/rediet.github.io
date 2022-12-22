import React from "react";
import red from "../assets/RediLogo.png";
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
    <div className="bigContainer">
      <NavBar page={"home"} />
      <div className="containerMain">
        <div className="main">
          <div style={{ margin: "5rem 0 5rem 0", width: "50%" }}>
            <img className="prof-img" src={red} alt="loading.." />
          </div>
          <div style={{ width: "50%" }}>
            <p
              style={{
                color: "pink",
                fontSize: "17px",
                padding: "7rem 4rem 0rem 3rem",
              }}
            >
              Front-end developer based in Addis Ababa experienced with MEARN
              stack technology. 4+ years industry experience with multiple
              JavaScript libraries and frameworks. Highly professional and a
              fine problem solver.
            </p>
          </div>
        </div>
        <div
          style={{
            color: "pink",
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
        <div className="bottom-container">
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
      </div>

      <Footer />
    </div>
  );
}
