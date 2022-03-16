type IconProps = {
  url: string;
  sx?: Object;
  className?: string;
};

const Icon: React.FC<IconProps> = (props) => {
  return (
    <img
      className={props.className}
      src={process.env.PUBLIC_URL + props.url}
      style={{ marginRight: 5, ...props.sx }}
      alt="icon"
    />
  );
};

export default Icon;
