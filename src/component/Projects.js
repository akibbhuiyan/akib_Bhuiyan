import React, { useState } from "react";
import { Col, Container, Row, Tab } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { ProjectsList1 } from "../db/Database";

const Projects = () => {
  const [key, setKey] = useState("home");
  console.log(ProjectsList1);
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              <div data-aos="fade-up-left">
                <h2>Projects</h2>
                <p>
                  I have built an impressive portfolio of projects showcasing
                  skills in React, JavaScript, Node.js, Express.js, Firebase,
                  and MongoDB. In this blog post, we'll take a closer look at
                  some of my projects and explore.
                </p>
              </div>
            </TrackVisibility>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-4"
            >
              <Tab eventKey="home" title="Tab One">
                <Row>
                  {ProjectsList1.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                  ))}
                </Row>
              </Tab>
              <Tab eventKey="profile" title="Tab Two">
                <Row>
                  {ProjectsList1.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                  ))}
                </Row>
              </Tab>
              <Tab eventKey="contact" title="Tab Three">
                <Row>
                  {ProjectsList1.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                  ))}
                </Row>
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
