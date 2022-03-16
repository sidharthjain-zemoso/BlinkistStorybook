type LogoProps = {
  id?: string;
  url: string;
  sx?: Object;
};

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <img
      data-testid={props.id}
      id={props.id}
      src={process.env.PUBLIC_URL + props.url}
      style={props.sx}
      alt="Logo"
    />
  );
};

export default Logo;
