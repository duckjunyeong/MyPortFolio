import React from "react";
import { PageHeaderWrapper } from "../Profile/styles.jsx";

const Blog = ({ BlogRef }) => {
  return (
    <PageHeaderWrapper ref={BlogRef}>
      <div>Blog</div>
    </PageHeaderWrapper>
  );
};

export default Blog;
