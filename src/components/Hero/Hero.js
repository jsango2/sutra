import React from "react";
import BackgroundAnimation from "./BackgroundAnimation";
import LinesAnimation from "./LinesAnimation";
import { Wrap, LottieWrap, Button, Bottom, WrapAll } from "./styles";
import SutraAnimation from "./SutraAnimation";

function Hero() {
  return (
    <WrapAll>
      <BackgroundAnimation />
      <LinesAnimation />
      <Wrap>
        <LottieWrap>
          <SutraAnimation />
          <Button>
            <a
              style={{
                textDecoration: "none",
                color: "white",
              }}
              href="mailto: info@sutra.hr?subject=Upit"
            >
              POŠALJITE UPIT
            </a>
          </Button>
        </LottieWrap>
      </Wrap>
      <Bottom>
        <div>video production</div>
        <div>motion design</div>
        <div>content creation</div>
        <div>web design</div>
        <div>branding</div>
        <div>photography</div>
      </Bottom>
    </WrapAll>
  );
}

export default Hero;
