
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix.flat().sort((a,b)=>a-b);
}
