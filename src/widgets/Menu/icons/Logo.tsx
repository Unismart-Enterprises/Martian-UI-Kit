import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 205 39" {...props}>
      <image
        width="95"
        height="40"
        href={isDark ? "https://i.ibb.co/wSyjnPJ/190849821-929101107944180-2178686293528274975-n.jpg" : "https://i.ibb.co/wSyjnPJ/190849821-929101107944180-2178686293528274975-n.jpg"}
      />
    </Svg>
  );
};

export default Logo;
