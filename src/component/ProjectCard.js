import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = ({ title, imgUrl, description, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" data-aos="flip-left">
        <img src={imgUrl} alt="project" />
        <a href={link} target="_blank" rel="noreferrer" className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </a>
      </div>
    </Col>
  );
};

export default ProjectCard;
