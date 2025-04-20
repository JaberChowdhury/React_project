import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center">
      <Link to="/" className="text-3xl">
        Book Vibe
      </Link>
      <ul className="flex justify-center items-center gap-x-4">
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isActive
                ? "border border-green-300 rounded p-2 text-green-500"
                : isPending
                ? "pending"
                : ""
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isActive
                ? "border border-green-300 rounded p-2 text-green-500"
                : isPending
                ? "pending"
                : ""
            }
            to="/Listed-books"
          >
            Listed Books
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isActive
                ? "border border-green-300 rounded p-2 text-green-500"
                : isPending
                ? "pending"
                : "/pages-to-read"
            }
            to="/Book"
          >
            Pages to Read
          </NavLink>
        </li>
      </ul>
      <div className="space-x-4">
        <button className="bg-green-400 p-2 rounded  px-5 cursor-pointer">
          Sign In
        </button>
        <button className="bg-cyan-400 p-2 rounded  px-5 cursor-pointer">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
