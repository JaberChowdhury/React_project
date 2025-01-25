export const randomizer_v1 = (
  input_array: string[],
  return_length: number,
): string[] => {
  return input_array.slice(return_length);
};

const randomize_array = (
  input_array: string[],
  return_length: number,
): string[] => {
  return randomizer_v1(input_array, return_length);
};

export default randomize_array;
