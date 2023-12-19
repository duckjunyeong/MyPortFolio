import { useEffect, useRef } from "react";
import "./App.css";
import Main from "./components/Main";
import Profile from "./components/Profile";
import Blog from "./components/Blog";
import Youtube from "./components/Youtube";
import Projects from "./components/Projects";
function App() {
  const profileRef = useRef(null);
  const BlogRef = useRef(null);
  const YoutubeRef = useRef(null);
  const ProjectsRef = useRef(null);
  return (
    <>
      <Main
        profileRef={profileRef}
        BlogRef={BlogRef}
        YoutubeRef={YoutubeRef}
        ProjectsRef={ProjectsRef}
      ></Main>
      <Profile profileRef={profileRef}></Profile>
      <Blog BlogRef={BlogRef}></Blog>
      <Youtube YoutubeRef={YoutubeRef}></Youtube>
      <Projects ProjectsRef={ProjectsRef}></Projects>
    </>
  );
}

export default App;
