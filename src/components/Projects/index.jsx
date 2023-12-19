import React from "react";
import { PageHeaderWrapper } from "../Profile/styles.jsx";

const Projects = ({ ProjectsRef }) => {
  return (
    <PageHeaderWrapper ref={ProjectsRef}>
      <div>Projects</div>
    </PageHeaderWrapper>
  );
};

export default Projects;
