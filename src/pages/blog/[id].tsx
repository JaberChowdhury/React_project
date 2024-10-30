import { useParams } from "react-router-dom";

const blog = () => {
  const { id } = useParams();
  return (
    <div>
      <div>Blog post id </div>
      <div>{id}</div>
    </div>
  );
};

export default blog;
