const validator = (value: string) => {
  switch (value.length) {
    case 1:
      return "00" + value;
    case 2:
      return "0" + value;
    default:
      return value;
  }
};

export default validator;
