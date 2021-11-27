import styled from "styled-components";
import "@fontsource/ubuntu/300.css";
import "@fontsource/roboto-slab/900.css";

export const WrapAll = styled.div`
  /* background-color: #eac444; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 750px) {
    /* height: 478px; */
  }
  @media only screen and (max-width: 550px) {
    /* height: 478px; */
  }
`;
export const Wrap = styled.div`
  position: absolute;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 750px) {
    /* height: 478px; */
  }
  @media only screen and (max-width: 550px) {
    /* height: 478px; */
  }
`;

export const LottieWrap = styled.div`
  position: relative;
  z-index: 30;
  width: 650px;
  height: 370px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: space-between;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 154px;

  @media only screen and (max-width: 750px) {
    width: 100%;
    height: 285px;
    margin-bottom: 120px;
  }
  @media only screen and (max-width: 550px) {
    width: 100%;
  }
  @media only screen and (max-width: 450px) {
    width: 100%;
  }
`;
export const Button = styled.div`
  position: relative;
  width: 347px;
  height: 54px;
  outline: 2px solid white;
  z-index: 20;
  margin-top: 24px;
  font-family: "Ubuntu";
  font-style: normal;
  color: white;
  cursor: pointer;
  font-weight: 300;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.13em;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  @media only screen and (max-width: 750px) {
    font-size: 18px;

    width: 220px;
    height: 35px;
    outline: 1px solid white;

    & a {
      font-size: 18px;
    }
  }
  @media only screen and (max-width: 550px) {
    /* height: 478px; */
  }
`;

export const Bottom = styled.div`
  position: absolute;
  z-index: 20;
  bottom: 50px;
  width: 90vw;
  height: 100px;
  font-family: "Roboto Slab";
  color: white;
  font-size: 22px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  > :nth-child(odd) {
    opacity: 0.44;
  }
  @media only screen and (max-width: 750px) {
    font-size: 16px;
    bottom: 50px;
    justify-content: space-around;
    & div {
      margin: 0 10px 0 10px;
    }
  }
  @media only screen and (max-width: 550px) {
    /* height: 478px; */
  }
`;
