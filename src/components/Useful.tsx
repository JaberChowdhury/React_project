import navigation from "@/constant/navigation";
import { Link } from "react-router-dom";

const Useful = () => {
  return (
    <div>
      <h1 className="card-title px-2 md:px-6">Useful links</h1>
      <div className="w-screen md:grid md:grid-cols-2 overflow-hidden flex justify-center items-center flex-col relative steps steps-vertical lg:steps-horizontal">
        {navigation.slice(1).map((data) => (
          <div
            data-content="•"
            key={data.title}
            className="card w-full md:w-[400px] step m-2 rounded bg-base-100"
          >
            <div className="card-body w-full">
              <h2 className="card-title">{data.title}</h2>
              <p className="w-full text-left">{data.description}</p>
              <div className="card-actions justify-end">
                <Link to={data.to} className="btn btn-success">
                  See more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Useful;
