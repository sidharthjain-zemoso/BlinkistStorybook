import { Avatar, Typography } from "@mui/material";
import Icon from "../../atoms/Icon";
import { makeStyles } from "@mui/styles";

interface AvatarWithIconProps {
  className?: string;
  children: any;
  sx?: Object;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
  },
});

const AvatarWithIcon: React.FC<AvatarWithIconProps> = (props) => {
  const styleClasses = useStyles();
  const { className, children, sx, ...rest } = props;
  return (
    <div
      className={`${className} ${styleClasses.root}`}
      {...rest}
      style={{ alignItems: "center", ...sx }}
      data-testid="account-avatar"
    >
      <Avatar sx={{ bgcolor: "#69A6E3", height: "30px", width: "30px" }}>
        <Typography variant="subtitle2" style={{ textAlign: "center" }}>
          {children}
        </Typography>
      </Avatar>
      <Icon url="/res/icons/down-arrow.png" sx={{ height: 24, width: 24 }} />
    </div>
  );
};

export default AvatarWithIcon;
