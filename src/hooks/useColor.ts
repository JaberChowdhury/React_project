const useColor = (d: number) => {
  const makeArray = (from: number, to: number) => {
    let newArray = [];
    for (let i = from; i < to; i++) {
      newArray.push(i);
    }
    return newArray;
  };

  const lanthanum = makeArray(57, 72);
  const actinium = makeArray(89, 104);

  if ([2, 10, 18, 36, 54, 86, 118].includes(d)) {
    return "bg-[#DD9D48]";
  } else if (
    [1, 5, 6, 7, 8, 9, 14, 15, 16, 17, 33, 34, 35, 52, 53, 85].includes(d)
  ) {
    return "bg-[#ADAE6C]";
  } else if (lanthanum.includes(d)) {
    return "bg-[#FEE3A5]";
  } else if (actinium.includes(d)) {
    return "bg-[#E5D6BF]";
  } else {
    return "bg-[#ECC847]";
  }
};

export default useColor;
