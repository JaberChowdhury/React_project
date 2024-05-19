import Data from "@/assets/data.json";

const useData = (isRemove: boolean) => {
  const makeData = (amount: number) => {
    let newArray = [];
    for (let i = 0; i < amount; i++) {
      newArray.push({});
    }
    return newArray;
  };

  const keys = Object.entries(Data);
  const data = keys.map((_, i) => {
    return keys[i][1];
  });

  data.shift();
  data.pop();

  // after hidrozen
  const after_hudrozen = makeData(16);
  data.splice(1, 0, ...after_hudrozen);

  // after Be
  const after_li = makeData(10);
  data.splice(20, 0, ...after_li);
  // after Mg
  data.splice(38, 0, ...after_li);

  if (isRemove) {
    // remove lanthanum
    data.splice(93, 14);

    // remove actinium
    data.splice(111, 14);
  }
  return data;
};

export default useData;
