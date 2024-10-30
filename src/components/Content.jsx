import image from "../images/photo.png";
import img from "../images/astronaut.svg";
import leetcode from "../images/leetcode.svg";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import circle from "../images/circle.png";
import React from "react";
import "./Style.css";

function Content() {
  return (
    <div>
      <section className="Home" id="home">
        <div className="photo-container">
          <img src={img} className="astronaut" alt="Astronaut" />
          <img src={image} className="photo" alt="Profile" />
          <p className="name">Vaishnavi Patil</p>
          <p className="more">Student | Learner</p>
          <div className="logo">
            <a href="https://leetcode.com/u/vaishnavisanjivv/">
              <img
                src={leetcode}
                alt="LeetCode"
                style={{ width: "45px", marginLeft: "5px" }}
              />
            </a>

            <a href="https://github.com/vaishnavisanjiv">
              <img
                src={github}
                alt="GitHub"
                style={{ width: "50px", marginLeft: "5px" }}
              />
            </a>
            <a href="https://linkedin.com/in/vaishnavisanjiv">
              <img
                src={linkedin}
                alt="LinkedIn"
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
          <br /> I love programming and learning new things! <br />
          Feel free to get in touch.
        </div>
      </section>

      <br />
      <br />
      <div className="bg">
        <section className="Skills" id="skills">
          <div className="circles-container">
            <h1
              style={{
                fontFamily: "SF Pro Display",
                color: "white",
                textAlign: "center",
                padding: "2%",
              }}
            >
              Skills
            </h1>
            <h3
              style={{
                fontFamily: "lato",
                color: "white",
                textAlign: "center",
                padding: "2%",
                fontWeight: "200",
                marginTop: "-2%",
                fontSize: "2.7vh",
              }}
            >
              Programming languages, Cloud platforms, Frameworks, Tools and
              Databases
            </h3>
            <div className="circles">
              <div className="circle-item">
                <img src={circle} className="circle" alt="Skill Circle" />
                <span className="text">C++ Java Python</span>
              </div>
              <div className="circle-item">
                <img src={circle} className="circle" alt="Skill Circle" />
                <span className="text">GCP Salesforce</span>
              </div>
              <div className="circle-item">
                <img src={circle} className="circle" alt="Skill Circle" />
                <span className="text">React.js Next.js Bootstrap</span>
              </div>
              <div className="circle-item">
                <img src={circle} className="circle" alt="Skill Circle" />
                <span className="text">Git GitHub</span>
              </div>
              <div className="circle-item">
                <img src={circle} className="circle" alt="Skill Circle" />
                <span className="text">MySQL MongoDB</span>
              </div>
            </div>
          </div>
        </section>

        <section className="Projects" id="projects">
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
                  style={{ color: "#FF4500", textDecoration: "none" }}
                >
                  View Website
                </a>
              </div>
            </div>

            <div className="card">
              <div className="heading">LibraAdmin</div>
              <div className="content">
                Designed and implemented a Library Administration System using
                SQL and Java to perform library operations such as cataloging,
                borrowing, and student management. MySQL database for storing
                and retrieving book records, user information, and ensuring
                efficient data management and access
                <br />
                <br />
                <a
                  href="https://github.com/vaishnavisanjiv/Library-Management-System"
                  style={{ color: "#FF4500", textDecoration: "none" }}
                >
                  View Project
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
                  style={{ color: "#FF4500", textDecoration: "none" }}
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="card">
              <div className="heading">Railway Reservation</div>
              <div className="content">
                The Railway Reservation System is a Java-based application
                designed to facilitate the booking, viewing, and cancellation of
                train tickets. This user-friendly system allows passengers to
                search for available trains, view schedules, and make
                reservations seamlessly.
                <br />
                <br />
                <a
                  href="https://github.com/vaishnavisanjiv/Railway-Reservation"
                  style={{ color: "#FF4500", textDecoration: "none" }}
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="card">
              <div className="heading">MIS APP</div>
              <div className="content">
                The MIS app provides secure login, student information
                management, access to academic results, and streamlined course
                registration, enhancing communication and feedback to improve
                the educational experience for students, teachers, and parents.
                <br />
                <br />
                <a href="" style={{ color: "#FF4500", textDecoration: "none" }}>
                  View Project
                </a>
              </div>
            </div>

            <div className="card">
              <div className="heading">Chandrayaan-3</div>
              <div className="content">
                As part of the second round of the Webscape competition at COEP
                in 2023, I created a website for Chandrayaan 3 using HTML and
                CSS within a given time slot. The website featured detailed
                information about the mission and was designed to be visually
                appealing and informative.
                <br />
                <br />
                <a
                  href="https://github.com/vaishnavisanjiv/Chandrayaan-3"
                  style={{ color: "#FF4500", textDecoration: "none" }}
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="About" id="about">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={img}
              className="astronaut1"
              alt="Astronaut"
              style={{
                width: "30%",
                height: "auto",
                marginRight: "2%",
                marginTop: "5%",
                opacity: "0.2", 
              }}
            />
            <span className="typing-effect">About Me!</span>
          </div>

          <h3
            style={{
              fontFamily: "SF Pro Display",
              color: "white",
              marginTop: "5%",
            }}
          >
            Education
          </h3>
          <p style={{ color: "white", fontFamily: "SF Pro Display" }}>
            Government Polytechnic Pune, Diploma in Computer Engineering <br />•
            Sept 2021 – June 2024 <br />• Percentage: 92.87 <br />
            <br />
            AISSMS Institute of Information Technology, B-Tech in Computer
            Engineering <br />• Sept 2024 – May 2027 <br />• SGPA: /10.0 (SY -
            Semester 1)
          </p>

          <h3
            style={{
              fontFamily: "SF Pro Display",
              color: "white",
              marginTop: "5%",
            }}
          >
            Experience
          </h3>
          <p style={{ color: "white", fontFamily: "SF Pro Display" }}>
            FullStack Intern, Omegasoft Technologies <br />
            • June 2022 – July 2022 <br />• Developed a dynamic and visually
            engaging cafe website, Bella Italia, crafted using modern web
            technologies. <br />• Built with React.js for the front end, Node.js
            for the back end, and MongoDB as the database, providing an
            efficient user experience.
            <br />
            <a
              href="https://github.com/vaishnavisanjiv/CafeWebsite"
              style={{ color: "white", textDecoration: "none" }}
            >
              • Link To Website
            </a>
          </p>

          <h3
            style={{
              fontFamily: "SF Pro Display",
              color: "white",
              marginTop: "5%",
            }}
          >
            Courses/Certifications/Achievements
          </h3>
          <p style={{ color: "white", fontFamily: "SF Pro Display" }}>
            • Hackerrank: Java (basic) certificate
            <br />
            • Infosys: Cybersecurity, Cryptography, Information Security,
            Network fundamentals
            <br />
            • MKCL : Python
            <br />
            • GreatLearning: Data Science with Python
            <br />
            • Udemy: AI with ML, DL
            <br />• Vortexa Hackathon : 2nd Runner up
          </p>
          <br />
          <br />
          <br />
        </section>
      </div>
    </div>
  );
}

export default Content;
