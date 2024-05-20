type propsType = {
  code: string;
};

const Hignlighter = ({ code }: propsType) => {
  const array = code.toString().split("\n");

  const indexValidation = (index: string) => {
    switch (index.length) {
      case 1:
        return "00" + index;
      case 2:
        return "0" + index;
      default:
        return index;
    }
  };

  return (
    <pre className="w-full">
      <code className="w-full">
        {array.map((line: string, index: number) => {
          return (
            <div
              className={`w-full flex gap-x-4 my-1 px-2 rounded ${index % 2 === 0 && "bg-cyan-900/25"}`}
              key={index}
            >
              <span className="w-min-12 text-cyan-500">
                {indexValidation((index + 1).toString())}
              </span>
              <span>{line}</span>
            </div>
          );
        })}
      </code>
    </pre>
  );
};

export default Hignlighter;
