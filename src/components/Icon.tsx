import React, { ElementType } from "react";

type IconProps = {
  component: ElementType;
  className: string;
};

const Icon: React.FC<IconProps> = ({ component: Component, className }) => {
  return <Component className={className} aria-hidden="true" />;
};

export default Icon;
