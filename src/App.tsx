import data from "./data.json";

const App = () => {
  const parseddata = JSON.parse(JSON.stringify(data));

  const dataArray = Object.entries(parseddata);

  console.log(dataArray);

  return (
    <div>
      <button className="btn">Default</button>
      <div className="card">{JSON.stringify(dataArray)}</div>
    </div>
  );
};

export default App;
