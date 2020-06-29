/**
 * Filters an array based on input,
 * searching by name or asset_id
 * @param {Array} arr
 * @param {String} input
 */
export const find = (arr, input) => {
  return arr.filter((item) => item.FullName.toLowerCase().includes(input.toLowerCase()));
};
