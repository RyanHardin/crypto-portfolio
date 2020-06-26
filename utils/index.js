/**
 * Filters an array based on input
 * @param {Array} arr
 * @param {String} input
 */
export const find = (arr, input) => {
  return arr.filter((item) => item.name.toLowerCase().includes(input.toLowerCase()));
};
