import Icon from "../../atoms/Icon";
import TypographyText from "../../atoms/Typography";

type TextWithIconProps = {
  iconHeight: string;
  iconWidth: string;
  textVariant:
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
  icon: string;
  iconAtEnd: boolean;
  text: string;
  className?: string;
  sx?: Object;
};

const TextWithIcon: React.FC<TextWithIconProps> = (props) => {
  return (
    <div
      data-testid="text-with-icon"
      style={{ display: "flex", padding: 5, alignItems: "center", ...props.sx }}
    >
      {!props.iconAtEnd ? (
        <Icon
          className={props.className}
          url={`/res/icons/${props.icon}.png`}
          sx={{ height: props.iconHeight, width: props.iconWidth }}
        />
      ) : null}
      <TypographyText
        className={props.className}
        component="div"
        variant={props.textVariant}
      >
        {props.text}
      </TypographyText>
      {props.iconAtEnd ? (
        <Icon
          className={props.className}
          url={`/res/icons/${props.icon}.png`}
          sx={{
            height: props.iconHeight,
            width: props.iconWidth,
            paddingLeft: 10,
          }}
        />
      ) : null}
    </div>
  );
};

export default TextWithIcon;
