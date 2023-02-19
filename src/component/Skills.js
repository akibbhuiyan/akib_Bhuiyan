import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const skills = [
    {
      name: "Web Develpment",
      percentage: 80,
    },
    {
      name: "React js",
      percentage: 90,
    },
    {
      name: "Javascript",
      percentage: 85,
    },
    {
      name: "Nodejs",
      percentage: 60,
    },
    {
      name: "ExpressJs",
      percentage: 75,
    },
  ];
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2 data-aos="fade-right">Skills</h2>
              <p data-aos="fade-left">
                As a MERN stack developer,I have a wide range of skills that are
                essential for building responsive, scalable, and user-friendly
                web applications.I am an expert in React, the powerful
                JavaScript library that allows to create dynamic and interactive
                user interfaces. I also have extensive experience in Node.js and
                Express.js, which provide the tools and flexibility needed to
                build efficient and scalable back-end systems. Additionally, I
                have expertise in Firebase, the cloud-based platform that allows
                you to build, test, and deploy web and mobile applications, as
                well as in MongoDB, the popular NoSQL database that enables you
                to store and manage large amounts of data in a flexible and
                scalable way.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                {skills.map((skill, idx) => (
                  <div className="item" key={idx}>
                    <CircularProgressbar
                      value={skill.percentage}
                      text={`${skill.percentage}%`}
                    />
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        src={colorSharp}
        alt="colorSharp"
        className="background-image-left"
      />
    </section>
  );
};

export default Skills;
