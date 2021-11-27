import React from "react";
import styled from "styled-components";

// import Lottie from "lottie-react";
import Lottie from "react-lottie";

import BackgroundLottie1152 from "./BackgroundAnimationLottie";
import { useWindowSize } from "../UseWindowSize";
import * as animationLines from "./linije1200.json";
const AnimationWrap = styled.div`
  opacity: 0.4;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* @media (max-width: 500px) {
    margin: 27vw 0 0;
  }
  @media (max-width: 400px) {
    margin: 0;
  } */
`;

function LinesAnimation() {
  const size = useWindowSize();
  const style = {};

  const interactivity = {
    mode: "play",
    actions: [
      {
        visibility: [0, 1],
        type: "seek",
        frames: [0, 153],
      },
    ],
  };

  const defaultOptionsLines = {
    loop: true,
    autoplay: true,
    animationData: animationLines,
    rendererSettings: {
      preserveAspectRatio: "xMaxYMax slice",
    },
  };

  function RenderAnimation() {
    return (
      <>
        <Lottie
          options={defaultOptionsLines}
          height={size.height}
          width={size.width}
          //   interactivity={interactivity}
          //   autoPlay={false}
          //   loop={false}
        />
      </>
    );
  }

  return (
    <AnimationWrap>
      <RenderAnimation />
    </AnimationWrap>
  );
}

export default LinesAnimation;
