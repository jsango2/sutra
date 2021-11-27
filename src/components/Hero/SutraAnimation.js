import React from "react";
import styled from "styled-components";

import Lottie from "lottie-react";

import heroLottie1152 from "./SutraAnimationLottie";
import { useWindowSize } from "../UseWindowSize";
const AnimationWrap = styled.div`
  @media (max-width: 500px) {
    margin: 27vw 0 0;
  }
  @media (max-width: 400px) {
    margin: 0;
  }
`;

function SutraAnimation() {
  const size = useWindowSize();

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

  function RenderAnimation() {
    if (size.width < 400) {
      return (
        <Lottie
          animationData={heroLottie1152}
          //   interactivity={interactivity}
          //   autoPlay={false}
          //   loop={false}
        />
      );
    } else if (size.width < 750) {
      return (
        <Lottie
          animationData={heroLottie1152}
          //   interactivity={interactivity}
          //   autoPlay={false}
          //   loop={false}
        />
      );
    } else {
      return (
        <Lottie
          animationData={heroLottie1152}
          //   interactivity={interactivity}
          //   autoPlay={false}
          //   loop={false}
        />
      );
    }
  }

  return (
    <AnimationWrap>
      <RenderAnimation />
    </AnimationWrap>
  );
}

export default SutraAnimation;
