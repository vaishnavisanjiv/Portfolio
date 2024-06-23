import image from "../images/photo.png";
import instagram from "../images/instagram.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import React, { useState } from "react";
import blog from "../images/blog.png";
import cert1 from "../images/certificates/cert1.jpg";
import cert2 from "../images/certificates/cert2.jpg";
import cert3 from "../images/certificates/cert3.jpg";
import cert4 from "../images/certificates/cert4.jpg";
import cert5 from "../images/certificates/cert5.jpg";
import cert6 from "../images/certificates/cert6.jpg";
import cert7 from "../images/certificates/cert7.jpg";
import cert8 from "../images/certificates/cert8.jpg";
import "./Style.css";

const certificates = [cert1, cert2, cert3, cert4, cert5, cert6, cert7, cert8];

function Content() {
  return (
    <div>
      <section className="Home" id="home">
        <div className="photo-container">
          <img src={image} className="photo" alt="Profile" />
          <p className="name">Vaishnavi Patil </p>
          <p className="more">Student | Learner </p>
          <div className="logo">
            <a href="https://www.instagram.com/vaishnavisanjivv">
              <img
                src={instagram}
                style={{ width: "45px", marginLeft: "5px" }}
              />
            </a>
            <a href="https://github.com/vaishnavisanjiv">
              <img src={github} style={{ width: "45px", marginLeft: "5px" }} />
            </a>
            <a href="https://linkedin.com/in/vaishnavisanjiv">
              <img
                src={linkedin}
                style={{ width: "45px", marginLeft: "5px" }}
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
      ,
      <section className="Blog" id="blog">
        <div
          className="blog"
          style={{ backgroundColor: "black", zIndex: "-1", marginTop: "-20px" }}
        >
          <p
            style={{
              fontFamily: "Josefin Sans",
              fontSize: "2.0em",
              textAlign: "center",
              fontWeight: "600",
              color: "white",
              padding: "30px",
              paddingTop: "45px",
            }}
          >
            Hello There!
          </p>
          <div className="img1">
            <img
              src={blog}
              style={{
                width: "100%",
                height: "90vh",
                paddingLeft: "10%",
                paddingRight: "10%",
                paddingBottom: "40px",
              }}
            />
          </div>
          <div
            className="info"
            style={{
              display: "flex",
              paddingLeft: "10%",
              paddingRight: "10%",
              paddingTop: "30px",
            }}
          >
            <div className="paragraph">
              <p>
                Greetings, dear friends! I am Vaishnavi Patil, an 18-year-old
                technology enthusiast . My journey into Computer Science and
                Engineering began with a pivotal decision after my 10th grade—a
                choice guided by the opportunity to study at the esteemed
                Government Polytechnic Pune, celebrated as one of Maharashtra's
                premier institutions for diploma education.
              </p>

              <p>
                Entering the realm of "computer engineering" was a revelation.
                The allure of understanding how digital landscapes are shaped
                and operated sparked a profound curiosity within me. As I
                embarked on my semesters, the intricate workings of backend
                processes and the seamless flow of systems became an enchanting
                discovery—nothing less than mesmerizing.
              </p>

              <p>
                My fascination with web development ignited early on.
                Transforming creative visions into tangible web pages became a
                captivating endeavor. Delving deeper into programming languages,
                deciphering the logic behind them became a pinnacle of
                achievement, evoking a deep-seated sense of fulfillment. It felt
                as though I hadn't chosen this field, but rather, it had chosen
                me. In my second year, I embarked on my maiden internship, where
                I delved into full-stack development. Crafting a dynamic café
                website as a project unveiled new dimensions of practical
                application, fostering my skills in a real-world setting.
              </p>

              <p>
                Things took an intriguing turn with the dawn of Android
                application development. Estimating the toil and intricacy
                required to create applications became palpable—a realization
                that deepened with subsequent forays into React Native and
                Flutter.
              </p>

              <p>
                Fetching vast amounts of data with a few lines of queries became
                a source of fascination. Database Management Systems (DBMS)
                revealed its unique prowess in organizing data, while Computer
                Networks captured my heart with its enigma of data transmission
                across vast distances—a concept once beyond imagination.
              </p>

              <p>
                In the subsequent years, the introduction of data mining as a
                subject became a pinnacle of excitement. Exploring its depths
                and creating predictive models opened doors to a realm where
                anticipation meets analysis—a journey marked by exhilaration and
                boundless discovery.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="certificates">
        <div style={{ backgroundColor: "black" }}>
          <p
            style={{
              fontFamily: "Josefin Sans",
              fontSize: "2.0em",
              textAlign: "center",
              fontWeight: "600",
              color: "white",
              padding: "30px",
              paddingTop: "60px",
              paddingBottom: "-30px",
            }}
          >
            Certificates
          </p>
          <div
            className="carousel"
            style={{
              width: "80%",
              paddingLeft: "10%",
              paddingRight: "10%",
              marginTop: "-29px",
              paddingBottom: "9%",
              marginLeft: "10%",
              marginRight: "10%",
            }}
          >
            <div id="carouselExampleCaptions" className="carousel slide">
              <div className="carousel-indicators">
                {certificates.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : "false"}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>
              <div className="carousel-inner">
                {certificates.map((cert, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    style={{ height: "80vh" }}
                  >
                    <img
                      src={cert}
                      className="d-block w-100"
                      alt={`Slide ${index + 1}`}
                      style={{ objectFit: "cover", height: "100%" }}
                    />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
                style={{ filter: "invert(1)" }}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
                style={{ filter: "invert(1)" }}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
