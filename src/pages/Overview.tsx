interface propsType {
  state: { value: string };
}

export default function Overview({ state }: propsType) {
  const countDuplicates = (data: string) => {
    let result = {};
    data.split("").map((d) => {
      result[d] = (result[d] || 0) + 1;
    });
    return result;
  };

  const final = countDuplicates(state.value);

  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col relative">
      <div>Overview</div>
      <div>{JSON.stringify(final)}</div>
    </div>
  );
}
