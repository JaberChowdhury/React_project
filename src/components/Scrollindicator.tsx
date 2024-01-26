const Scrollindicator = () => {
  return (
    <div className="w-full z-30 fixed top-0 left-0">
      <div
        id="indicator"
        className="h-full rounded-full p-1 bg-gradient-to-br from-rose-400 to-orange-300"
      ></div>
    </div>
  );
};

export default Scrollindicator;
