import { useParams, Link } from "react-router-dom";
import Gradienttext from "@/components/Gradienttext";
import Useful from "@/components/Useful";

const error = () => {
  const path = useParams();
  return (
    <div className="w-full gap-y-6 pt-20 flex justify-center items-center flex-col">
      <Gradienttext className="text-8xl my-10 btn btn-ghost" text="404" />
      <h1 className="text-6xl w-full text-center ">Page not found</h1>
      <Link to={`/${path["*"]}`}>
        <div>Path '/{path["*"]}'' doesn't exist</div>
      </Link>
      <Link to="/" className="btn link">
        Go to home
      </Link>
      <Useful />
    </div>
  );
};

export default error;
