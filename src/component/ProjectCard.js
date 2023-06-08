import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, imgUrl, description, link, gitHubLink, id }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" data-aos="flip-left">
        <img src={imgUrl} alt="project" />
        <div className="proj-txtx">
          <div className="project-content">
            <h4>{title}</h4>

            <div className="proj-det">
              <a href={gitHubLink} className="pe-4 link-btn" target="blank">
                Github
              </a>
              <a href={link} className="link-btn" target="blank">
                Live Site
              </a>
            </div>
            <Link to={`/projectDetails/${id}`} className="link-btn details-btn">
              Details
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
