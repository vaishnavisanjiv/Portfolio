import image from "../images/photo.png";
import img from "../images/astronaut.svg";
import leetcode from "../images/leetcode.svg";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import React, { useState } from "react";
import "./Style.css";

function Content() {
  return (
    <div>
      <section className="Home" id="home">
        <div className="photo-container">
          <img src={img} className="astronaut" />
          <img src={image} className="photo" alt="Profile" />
          <p className="name">Vaishnavi Patil</p>
          <p className="more">Student | Learner </p>
          <div className="logo">
            <a href="https://leetcode.com/u/vaishnavisanjivv/">
              <img
                src={leetcode}
                style={{ width: "45px", marginLeft: "5px" }}
              />
            </a>
            <a href="https://github.com/vaishnavisanjiv">
              <img src={github} style={{ width: "50px", marginLeft: "5px" }} />
            </a>
            <a href="https://linkedin.com/in/vaishnavisanjiv">
              <img
                src={linkedin}
                style={{ width: "43px", marginLeft: "5px" }}
              />
            </a>
          </div>
        </div>
        <div className="description">
          <b>Heyy!!</b>
          <br />
          <br />
          I’m Vaishnavi Patil from Pune, India!
          <br />I love programming and learning new things!
          <br />
          Feel free to get in touch
        </div>
      </section>
      <section className="Projects" id="projects">
        <br />
        <br />
        <div className="portfolio">Portfolio</div>
        <div className="bg">
          <div className="cards">
            <div className="card">
              <div className="heading">Cafe Website</div>
              <div className="content">
                During my first internship in full-stack development, I created
                a dynamic cafe website named Bella Italia using React.js for the
                front end, Node.js for the back end, and MongoDB for the
                database. State management was handled with Redux, ensuring
                efficient data flow and application state updates.
                <br />
                <br />
                <a
                  href="https://github.com/vaishnavisanjiv/CafeWebsite"
                  style={{
                    color: "black",
                    textDecoration: "none",
                    color: "#FF4500",
                  }}
                >
                  View Website
                </a>
              </div>
            </div>

            <div className="card">
              <div className="heading">Chandrayaan 3</div>
              <div className="content">
                As part of the second round of the Webscape competition at COEP
                in 2023, I created a website for Chandrayaan 3 using HTML and
                CSS within a given time slot. The website featured detailed
                information about the mission and was designed to be visually
                appealing and informative
                <br />
                <br />
                <a
                  href="https://github.com/vaishnavisanjiv/Chandrayaan-3"
                  style={{
                    color: "black",
                    textDecoration: "none",
                    color: "#FF4500",
                  }}
                >
                  View Website
                </a>
              </div>
            </div>

            <div className="card">
              <div className="heading">Personality Prediction</div>
              <div className="content">
                The Personality Prediction project uses a decision tree
                algorithm to predict personality traits based on the OCEAN
                model. This project analyzes input data to accurately determine
                individual personality profiles, demonstrating the effectiveness
                of decision trees in psychological assessments.
                <br />
                <br />
                <a
                  href="https://github.com/vaishnavisanjiv/Personality-Prediction"
                  style={{
                    color: "black",
                    textDecoration: "none",
                    color: "#FF4500",
                  }}
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="card" style={{ marginLeft: "235px" }}>
              <div className="heading">Child Safety Device</div>
              <div className="content">
                An IoT-based child safety wearable device project. In case of
                danger, the device immediately sends live location and an alert
                message to the parent's smartphones. This ensures rapid response
                and peace of mind for parents, leveraging real-time connectivity
                to enhance child safety..
                <br />
                <br />
                <a
                  href=""
                  style={{
                    color: "black",
                    textDecoration: "none",
                    color: "#FF4500",
                  }}
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="card">
              <div className="heading">MIS App</div>
              <div className="content">
                An Android student MIS (Management Information System) app
                designed to efficiently manage student records, result, Book
                reservation, registration of courses and communication between
                students, teachers, and parents, enhancing school administration
                and parent involvement.
                <br />
                <br />
                <a
                  href=""
                  style={{
                    color: "black",
                    textDecoration: "none",
                    color: "#FF4500",
                  }}
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
