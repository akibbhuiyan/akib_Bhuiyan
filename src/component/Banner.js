import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FiArrowRightCircle } from "react-icons/fi";
import HeaderImg from "../assets/img/header-img.svg";
import Typewriter from "typewriter-effect";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              <div className="animate__animated animate__fadeInLeftBig">
                <span className="tagline">Welcome to my PortFolio</span>
                <h1 className="text-white">
                  Hi I am Akib Bhuiyan
                  <Typewriter
                    options={{
                      strings: [
                        "A Mern Stack Developer",
                        "A JavaScript Developer",
                        "A React Developer",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      wrapperClassName: "wrap",
                    }}
                  />
                </h1>
                <p>
                  A self-motivated and enthusiastic web developer with a deep
                  interest in JavaScript and other programming languages.
                  Seeking a Web Developer position in a company where I can use
                  my skills and develop my skills.
                </p>
                <a href="#connect">
                  <button onClick={() => console.log("Connect")}>
                    Let's Connect <FiArrowRightCircle size={"24px"} />
                  </button>
                </a>
              </div>
            </TrackVisibility>
          </Col>
          <Col
            xs={12}
            md={6}
            xl={5}
            className="animate__animated animate__fadeInRightBig"
          >
            <img src={HeaderImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
