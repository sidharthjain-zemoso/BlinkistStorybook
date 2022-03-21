import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { theme } from "../../../themes";

const useStyles = makeStyles({
  addToLib: {
    width: "100%",
    height: 52,
    "&.MuiButtonBase-root": {
      color: theme.palette.secondary.main,
      backgroundColor: "white",
      borderWidth: "0.1px 0.5px 1px 0.5px",
      borderStyle: "solid",
      borderColor: "#E1ECFC",
      borderRadius: "0px 0px 8px 8px",
      "&:hover": {
        color: "white",
        backgroundColor: theme.palette.secondary.main,
      },
    },
  },
  explore: {
    "&:hover": {
      backgroundColor: "#FFFFFF",
      borderBottom: "2px solid #2ce080",
    },
  },
});

interface ButtonProps {
  id?: string;
  variant?: "text" | "contained" | "outlined";
  children?: any;
  sx?: Object;
  onclick?: React.MouseEventHandler<HTMLElement>;
  className?: "addToLib" | "explore";
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  size?: "large" | "medium" | "small";
  color?: "inherit" | "secondary" | "primary" | "success";
  classes?: any;
}

const CustomButton = (props: ButtonProps) => {
  const styleClasses = useStyles();
  const {
    variant = "contained",
    className,
    children,
    sx,
    startIcon,
    endIcon,
    id,
    classes,
    onclick,
    ...rest
  } = props;

  return (
    <Button
      {...rest}
      id={id}
      className={className ? styleClasses[className] : undefined}
      // classes={classes}
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{ textTransform: "none", ...sx }}
      // color={color}
      onClick={onclick}
      disableRipple={true}
      disableFocusRipple={true}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
