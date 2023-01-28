import React, { useState } from "react";
import { Col, Container, Row, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/creativeAgency.png";
import projImg2 from "../assets/img/edukito.png";
import projImg3 from "../assets/img/eduvibe.png";
import projImg4 from "../assets/img/travelguru.png";
import projImg5 from "../assets/img/redonion.png";
import projImg6 from "../assets/img/patoRestaurent.png";
import Tabs from "react-bootstrap/Tabs";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
const Projects = () => {
  const [key, setKey] = useState("home");
  const projects = [
    {
      title: "Creative Agency",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "https://creative-agency-client.vercel.app",
    },
    {
      title: "EduKito",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "",
    },
    {
      title: "EduVibe",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "",
    },
    {
      title: "Travel Guru",
      description: "Design & Development",
      imgUrl: projImg4,
      link: "",
    },
    {
      title: "Red Onion",
      description: "Design & Development",
      imgUrl: projImg5,
      link: "",
    },
    {
      title: "Pato Restaurent",
      description: "Design & Development",
      imgUrl: projImg6,
      link: "https://pato-restaurent.vercel.app/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              <div data-aos="fade-up-left">
                <h2>Projects</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore assumenda eligendi fuga reprehenderit rem
                  necessitatibus distinctio voluptate nesciunt sed nihil.
                </p>
              </div>
            </TrackVisibility>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="home" title="Tab One">
                <Row>
                  {projects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                  ))}
                </Row>
              </Tab>
              <Tab eventKey="profile" title="Tab Two">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam veniam quo quae consequuntur vitae, ullam esse eum
                  nulla modi, recusandae voluptas qui, labore beatae cum!
                  Obcaecati cupiditate perspiciatis corrupti possimus.
                </p>
              </Tab>
              <Tab eventKey="contact" title="Tab Three">
                <p className="animate__animated animate__bounce">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam veniam quo quae consequuntur vitae, ullam esse eum
                  nulla modi, recusandae voluptas qui, labore beatae cum!
                  Obcaecati cupiditate perspiciatis corrupti possimus.
                </p>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
      <img
        src={colorSharp2}
        alt="colorSharp"
        className="background-image-right"
      />
    </section>
  );
};

export default Projects;
