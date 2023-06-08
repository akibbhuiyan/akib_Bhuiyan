import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectsList1 } from "../db/Database";
import { PhotoView } from "react-photo-view";
const ProjectDetails = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    const singleProject = ProjectsList1.find(
      (project) => Number(project.id) === Number(projectId)
    );
    setProject(singleProject);
  }, [projectId]);
  const { images, title } = project;
  console.log(images);
  return (
    <>
      <div
        className="container proj-detContainer"
        style={{ marginTop: "120px" }}
      >
        <div className="mainCard">
          <div className="image-container">
            {project.images?.map((image, index) => (
              <figure key={index} className="w-full cursor-pointer">
                <PhotoView src={image}>
                  <img
                    className="w-full h-full rounded-md border dark:border-none"
                    src={image}
                    alt={title}
                  />
                </PhotoView>
              </figure>
            ))}
          </div>
          <div className="cardBody">
            <h2 className="cardTitle">{project.title}</h2>
            <ul className="list-des">
              {project.projDes?.map((des, idx) => (
                <li key={idx}>{des}</li>
              ))}
            </ul>
            <p className="tech-p">Technology Used</p>
            <div className="technology">
              {project.technology?.map((tech, idx) => (
                <button className="tech_btn" key={idx}>
                  {tech}
                </button>
              ))}
            </div>
          </div>

          <div className="cardAction">
            <a href={project.gitHubLink} target="blank">
              Github Link
            </a>
            <a href={project.link} target="blank">
              Live Link
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
