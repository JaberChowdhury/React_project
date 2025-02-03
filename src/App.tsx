import googleData from "./data.json";

const App = () => {
  const data = JSON.parse(JSON.stringify(googleData));

  const dataArray = Object.entries(data.items[0]);
  return (
    <div>
      <div>{JSON.stringify(dataArray)}</div>
      <div>
        {dataArray.map((item, id) => {
          return (
            <div className="" key={id}>
              {JSON.stringify(item)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
