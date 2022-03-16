import { Typography } from "@mui/material";
import { ElementType } from "react";

type TypographyTextProps = {
  variant?:
    | "heading"
    | "heading3"
    | "subtitle1"
    | "subtitle2"
    | "subtitle3"
    | "body1"
    | "body2"
    | "body3"
    | "caption1"
    | "caption2"
    | "caption3";
  component: ElementType<any>;
  children?: any;
  color?: string;
  sx?: Object;
  className?: string;
};

const TypographyText: React.FC<TypographyTextProps> = (props) => {
  const {
    variant = "heading",
    component,
    children,
    color,
    sx,
    className,
    ...rest
  } = props;
  return (
    <Typography
      className={className}
      variant={variant}
      component={component}
      color={color}
      style={sx}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default TypographyText;
