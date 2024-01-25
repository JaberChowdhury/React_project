import Clock from "@/components/Clock";

const Hero = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md flex justify-center items-center flex-col">
          <h1 className="text-5xl font-bold btn btn-ghost">Hello there !</h1>
          <p className="py-6">
            In this website project we are going to make a curd program using
            typescript, zod, react-hook-form and many others .{" "}
          </p>
          <button className="btn my-8 btn-primary">Get Started</button>
          <h2 className="card-title my-2">Current time</h2>
          <Clock />
        </div>
      </div>
    </div>
  );
};

export default Hero;
