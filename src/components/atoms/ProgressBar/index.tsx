import { theme } from "../../../themes";

type ProgressBarProps = {
  progress?: number;
  sx?: Object;
};

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  return (
    <div
      data-testid="progress-bar-id"
      style={{
        height: "15px",
        backgroundColor: theme.palette.backgroundcolor.main,
        ...props.sx,
      }}
    >
      <div
        style={{
          width: `${props.progress ? props.progress : 100}%`,
          height: "15px",
          backgroundColor: "#E1ECFC",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
