//https://www.codewars.com/kata/moving-zeros-to-the-end


var moveZeros = function (arr) {
  // TODO: Program me
  var zeros = [];
  var norms = [];
  for(i= 0; i < arr.length; i++){
      if(arr[i] === 0){
          zeros.push(0)
      } else {
          norms.push(arr[i])
      }
  }
  return [...norms, ...zeros]
  
}



  console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))
  //([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])


var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}