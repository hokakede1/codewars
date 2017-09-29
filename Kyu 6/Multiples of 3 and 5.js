// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){
console.log(number)
  var arr = []
  for(i=0; i < number; i++){
      if(i % 3 === 0){
          arr.push(i)
      } else if (i % 5 === 0){
        arr.push(i)
      }
  }
  if(arr.length === 0){
  return 0
  } else {
  return arr.reduce((a,b) => a+b)
  }
}


console.log(solution(10)) //23




// Better and simpler solution: 
function solution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}