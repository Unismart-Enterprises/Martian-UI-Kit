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
        href={isDark ? "https://i.ibb.co/s3D1HM2/186532411-1136189266902620-696115716973781045-n.jpg" : "https://i.ibb.co/s3D1HM2/186532411-1136189266902620-696115716973781045-n.jpg"}
      />
    </Svg>
  );
};

export default Logo;
