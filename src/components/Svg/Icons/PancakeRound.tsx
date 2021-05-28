import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 90 90" {...props}>
      <image width={90} height={90} href="https://i.ibb.co/wSyjnPJ/190849821-929101107944180-2178686293528274975-n.jpg" />
    </Svg>
  );
};

export default Icon;
