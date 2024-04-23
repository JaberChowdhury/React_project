
/*
  const findWinner = () => {
    for (let i = 0; i < block.length; i++) {
      if (
        block[0].value === "X" &&
        block[1].value === "X" &&
        block[2].value === "X"
      ) {
        setWinner("X");
      } else if (
        block[0].value === "O" &&
        block[1].value === "O" &&
        block[2].value === "O"
      ) {
        setWinner("O");
      } else if (
        block[3].value === "X" &&
        block[4].value === "X" &&
        block[5].value === "X"
      ) {
        setWinner("X");
      } else if (
        block[3].value === "O" &&
        block[4].value === "O" &&
        block[5].value === "O"
      ) {
        setWinner("O");
      } else if (
        block[6].value === "X" &&
        block[7].value === "X" &&
        block[8].value === "X"
      ) {
        setWinner("X");
      } else if (
        block[6].value === "O" &&
        block[7].value === "O" &&
        block[8].value === "O"
      ) {
        setWinner("O");
      } else if (
        block[0].value === "X" &&
        block[3].value === "X" &&
        block[6].value === "X"
      ) {
        setWinner("X");
      } else if (
        block[0].value === "O" &&
        block[3].value === "O" &&
        block[6].value === "O"
      ) {
        setWinner("O");
      } else if (
        block[1].value === "X" &&
        block[4].value === "X" &&
        block[7].value === "X"
      ) {
        setWinner("X");
      } else if (
        block[1].value === "O" &&
        block[4].value === "O" &&
        block[7].value === "O"
      ) {
        setWinner("O");
      } else if (
        block[2].value === "X" &&
        block[5].value === "X" &&
        block[8].value === "X"
      ) {
        setWinner("X");
      } else if (
        block[2].value === "O" &&
        block[5].value === "O" &&
        block[8].value === "O"
      ) {
        setWinner("O");
      } else if (
        block[0].value === "X" &&
        block[4].value === "X" &&
        block[8].value === "X"
      ) {
        setWinner("X");
      } else if (
        block[0].value === "O" &&
        block[4].value === "O" &&
        block[8].value === "O"
      ) {
        setWinner("O");
      } else if (
        block[2].value === "X" &&
        block[4].value === "X" &&
        block[6].value === "X"
      ) {
        setWinner("X");
      } else if (
        block[2].value === "O" &&
        block[4].value === "O" &&
        block[6].value === "O"
      ) {
        setWinner("O");
      }
    }
  };
*/


/*
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col relative">
      <div className="w-4/5 grid p-2 justify-center items-center grid-cols-3 border-2">
        {block.map((d, index) => {
          return (
            <button
              disabled={false}
              onClick={() => handleClick(d)}
              key={index}
              style={{
                backgroundColor: d.color,
              }}
              className="h-20 md:h-[200px] border-2 m-2 text-center"
            >
              {d.value}
            </button>
          );
        })}
      </div>
      <p>{JSON.stringify({ block })}</p>
      <p>{JSON.stringify({ currentValue })}</p>
      <p>{JSON.stringify({ winner })}</p>
    </div>
  );
*/