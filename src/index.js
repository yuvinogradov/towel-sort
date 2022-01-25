function towelSort (matrix) {
  for(rowIndex in matrix){
    matrix[rowIndex].sort((a, b) => rowIndex % 2 === 0 ? a-b : b-a)
  }
 return matrix.flat()
}
