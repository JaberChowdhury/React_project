import Gradienttext from "@/components/Gradienttext";
import { useStore } from "@nanostores/react";
import $todosbin from "@/stores/todosbin";
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";

const Bin = () => {
  const todosbin = useStore($todosbin);
  return (
    <div className="w-full gap-y-8 pt-20 min-h-screen flex items-center flex-col relative">
      <div className="w-full text-left">
        <Gradienttext className="text-6xl font-bold" text="Bin" />
      </div>
      <div className="max-w-[400px] overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th></th>
              <td>Title</td>
              <td>Description</td>
              <td>Time</td>
              <td>Read</td>
            </tr>
          </thead>
          <tbody>
            {todosbin.map((data, index) => (
              <tr key={data.id}>
                <th>{index + 1}</th>
                <td>{data.title}</td>
                <td>{data.description}</td>
                <td>{data.time}</td>
                <td>
                  <Link to={`/todos/bin/${data.id}`}>
                    <FaLink />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bin;
