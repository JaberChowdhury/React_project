import Clock from "@/components/Clock";

const Hero = () => {
  return (
    <div className="hero min-h-[80vh]">
      <div className="hero-content text-center">
        <div className="max-w-md flex justify-center items-center flex-col">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
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
