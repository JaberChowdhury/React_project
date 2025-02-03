import googleData from "./data.json";

// Function to render nested values properly
const renderValue = (value: any) => {
  if (Array.isArray(value)) {
    return value.join(", "); // Display arrays as comma-separated values
  } else if (typeof value === "object" && value !== null) {
    return (
      <table className="border border-gray-400 ml-4 w-full">
        <tbody>
          {Object.entries(value).map(([nestedKey, nestedValue], index) => (
            <tr key={index}>
              <td className="border border-gray-400 p-2">{nestedKey}</td>
              <td className="border border-gray-400 p-2">
                {typeof nestedValue === "string" &&
                nestedValue.startsWith("http") ? (
                  <a
                    href={nestedValue}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    {nestedValue}
                  </a>
                ) : (
                  renderValue(nestedValue)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  return typeof value === "string" && value.startsWith("http") ? (
    <a
      href={value}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 underline"
    >
      {value}
    </a>
  ) : (
    value
  );
};

// Table body component
const Tbody = ({ data }) => (
  <tbody className="border-2 border-green-500 mt-6">
    {Object.entries(data).map(([key, value], index) => (
      <tr key={index}>
        <td className="border border-gray-500 p-2">{key}</td>
        <td className="border border-gray-500 p-2">{renderValue(value)}</td>
      </tr>
    ))}
  </tbody>
);

const App = () => {
  const data = googleData.items || []; // Ensure `items` exist

  return (
    <div className="container mx-auto p-4">
      <table className="table-auto border-collapse border border-gray-500 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-500 p-2">Key</th>
            <th className="border border-gray-500 p-2">Value</th>
          </tr>
        </thead>
        {data.length > 0 ? (
          data.slice(0, 100).map((item, id) => <Tbody data={item} key={id} />)
        ) : (
          <tbody>
            <tr>
              <td
                colSpan={2}
                className="border border-gray-500 p-2 text-center"
              >
                No data available
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default App;
