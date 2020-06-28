/**
 * Filters an array based on input,
 * searching by name or asset_id
 * @param {Array} arr
 * @param {String} input
 */
export const find = (arr, input) => {
  return arr.filter(
    (item) =>
      item.name.toLowerCase().includes(input.toLowerCase()) ||
      item.asset_id.toLowerCase().includes(input.toLowerCase()),
  );
};
