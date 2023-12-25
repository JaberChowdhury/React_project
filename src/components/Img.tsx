type propsType = {
  src: string;
};

const Img = ({ src }: propsType) => {
  return <img src={src} alt="An aesthetic image ⚡️" loading="lazy" />;
};

export default Img;
