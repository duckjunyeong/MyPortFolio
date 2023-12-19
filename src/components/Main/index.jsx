import react from "react";
import myPoto from "../../image/myPoto.jpg";
import {
  IntroducingWrapper,
  MainWrapper,
  ImageWrapper,
  NavWrapper,
} from "./styles";

const Main = () => {
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
            <a href="profile">Profile</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Youtube</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Github</a>
          </li>
        </ul>
      </NavWrapper>
    </MainWrapper>
  );
};

export default Main;
