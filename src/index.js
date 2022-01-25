function towelSort (mat) {
//     работает, но тест не проходит
   for(let rowIndex in mat){
     mat[rowIndex].sort((a, b) => rowIndex % 2 === 0 ? a-b : b-a)
   }
  return mat.flat()
    
//   const res=[]
//   for(let i=0; i<matrix.length; i++){
//     if(i%2 === 0) res.push(...[...matrix[i]].sort((a, b)=> a-b))
//     else res.push(...[...matrix[i]].sort((a, b)=> b-a))
//   }
//  return res
}
