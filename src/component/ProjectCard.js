import React from 'react';
import { Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';

const ProjectCard = ({ title, imgUrl, description }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx" data-aos="flip-left">
                <img src={imgUrl} alt='project' />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    );
};

export default ProjectCard;