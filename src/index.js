
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!(matrix instanceof Array) || matrix.length === 0) {
    return [];
  }

  const result = [];
  for (const row in matrix) {
    result.push(
      ...((row % 2 === 0) ? matrix[row] : matrix[row].reverse())
    );
  }

  return result;
}
