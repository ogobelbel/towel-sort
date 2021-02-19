
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr1 = [];
    if(matrix){
     let k=[];
    for(let i = 0; i<matrix.length;i++){
        k =  matrix[i];
        if(i%2==0){
        for(let j = 0; j<k.length; j++){
            arr1.push(matrix[i][j]);
        }
      }
        else{
          for(let j = k.length-1; j>=0; j--){
            arr1.push(matrix[i][j]);
        }
    }
  }
}
  return   arr1;
  }
