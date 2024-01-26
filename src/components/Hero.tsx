import Clock from "@/components/Clock";
import Gradienttext from "./Gradienttext";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md flex justify-center items-center flex-col">
          <h1 className="text-5xl font-bold btn btn-ghost">Hello there !</h1>
          <p className="py-6">
            In this website project we are going to make a curd program using{" "}
            <Gradienttext
              className="underline"
              text="typescript, zod, react-hook-form, daisyui"
            />{" "}
            and many others .{" "}
          </p>
          <Link to="/todos/add" className="btn my-8 btn-primary">
            Get Started
          </Link>
          <h2 className="card-title my-2">Current time</h2>
          <Clock />
        </div>
      </div>
    </div>
  );
};

export default Hero;
