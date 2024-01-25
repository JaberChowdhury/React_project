type propsType = {
  code: string;
  hl?: number[];
};

const Hignlighter = ({ code, hl }: propsType) => {
  const array = code.toString().split("\n");

  return (
    <pre className="w-full">
      <div className="mockup-code rounded">
        {array.map((line: string, index: number) => {
          return (
            <pre
              className={`${hl && hl.includes(index + 1) && "text-warning"}`}
              key={index}
              data-prefix={index + 1}
            >
              <code>{line}</code>
            </pre>
          );
        })}
      </div>
    </pre>
  );
};

export default Hignlighter;
