import styled from "styled-components";

export const Wrap = styled.div`
  background-color: #eac444;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
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
  width: 502px;
  height: 173px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 2px solid green;
  font-size: 154px;
  @media only screen and (max-width: 750px) {
    /* height: 478px; */
  }
  @media only screen and (max-width: 550px) {
    /* height: 478px; */
  }
`;
