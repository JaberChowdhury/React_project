import { Link } from "react-router-dom";
import navigation from "@/constant/navigation";
import Icon from "./Icon";
import { useEffect } from "react";
import $theme from "@/stores/theme";
import { useStore } from "@nanostores/react";
import themeData from "@/constant/themeData";
import Gradienttext from "@/components/Gradienttext";

export default function Navbar() {
  const theme = useStore($theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <nav className="navbar sticky top-0 z-30 bg-base-100/50 backdrop-blur-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu steps steps-vertical menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-52"
          >
            {navigation.map((data) => {
              return (
                <li className="step" key={data.title}>
                  <Link to={data.to}>
                    <Icon icon={data.icon || ""} />
                    {data.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <Gradienttext className="text-3xl" text={"CURD_"} />
        </Link>
      </div>
      <div className="navbar-end mr-4">
        <button
          className="btn"
          onClick={() =>
            (
              document.getElementById("my_modal_4") as HTMLDialogElement | null
            )?.showModal()
          }
        >
          {theme}
        </button>
      </div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Select theme</h3>
          <div className="flex justify-between items-center flex-wrap relative">
            {themeData.map((tag) => (
              <div
                key={tag}
                onClick={() => $theme.set(tag)}
                className="w-20 m-2"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </nav>
  );
}
