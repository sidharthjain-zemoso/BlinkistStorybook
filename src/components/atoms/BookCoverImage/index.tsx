type CoverImageProps = {
  url: string;
  styles?: Object;
};

const CoverImage: React.FC<CoverImageProps> = (props) => {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + props.url}
        style={props.styles}
        alt="book cover"
      />
    </div>
  );
};

export default CoverImage;
