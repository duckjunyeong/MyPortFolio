import react, { useCallback } from "react";
import myPoto from "../../image/myPoto.jpg";
import {
  IntroducingWrapper,
  MainWrapper,
  ImageWrapper,
  NavWrapper,
} from "./styles";

const Main = ({ profileRef, BlogRef, YoutubeRef, ProjectsRef }) => {
  const moveToProfilePage = useCallback(
    (ref) => {
      if (ref) {
        const offsetTop = ref.current.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    },
    [profileRef]
  );
  return (
    <MainWrapper>
      <IntroducingWrapper>
        <div>
          안녕하세요, Front-end-developer <span>안준영</span>입니다.
        </div>
        <p>
          행동을 하기전 생각하고, 목표에 빨리 도달하기 위해 효율적인 방법을
          생각합니다.
        </p>
      </IntroducingWrapper>
      <NavWrapper>
        <ul>
          <li>
            <button
              onClick={() => {
                moveToProfilePage(profileRef);
              }}
            >
              Profile
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                moveToProfilePage(BlogRef);
              }}
            >
              Blog
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                moveToProfilePage(YoutubeRef);
              }}
            >
              Youtube
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                moveToProfilePage(ProjectsRef);
              }}
            >
              Projects
            </button>
          </li>
        </ul>
      </NavWrapper>
    </MainWrapper>
  );
};

export default Main;
