import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to right, #8360c3, #2ebf91);
`;

export const IntroducingWrapper = styled.div`
  position: absolute;
  top: 80px;
  left: 80px;
  & > div {
    font-size: 40px;
    font-weight: 600;
    & > span {
      color: #c0392b;
    }
  }
  & > p {
    font-size: 30px;
    margin-top: 10px;
  }
`;

export const NavWrapper = styled.div`
  position: absolute;
  bottom: 170px;

  & > ul {
    display: flex;
    width: 100vw;
    justify-content: space-around;
    & > li {
      font-size: 50px;
        & > a:hover{
          color:white;
        }
      }
  
    }
  }
`;
