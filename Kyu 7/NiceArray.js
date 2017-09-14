//A Nice array is defined to be an array where for every value n in the array, there is also an element n-1 or n+1 in the array.



//MY SOLUTION

arr1 = [2,10,9,3] // return TRUE
arr2 = [3,4,5,7] // return FALSE

function isNice(arr){
    if(arr.length === 0){
        return false
    }

    
  const result = arr.map((item,index,arr) => {
      option1 = item + 1;
      option2 = item - 1;
    
      if(arr.includes(option1)){
          return true
      } 
      else if (arr.includes(option2)) { return true }
      else { return false }
  })
  let count = 0;


  result.forEach((item) => {
      if(item === true){
          count++
      }
  })


  if(arr.length === count){
      return true
  }
  else {
      return false
  }
}

console.log(isNice([ -2, 5, 0, 5, 12 ]))


//THE BEST SOLUTION 

function isNice(arr){
  return !!arr.length && arr.every(x => arr.some(y => y === x - 1 ||  y === x + 1));
}



//BEST PRACTICE
function isNice(arr){
    var counter = 0
    for(var i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i] - 1) || arr.includes(arr[i] + 1)) counter ++
    }
    if (counter == arr.length && arr.length != 0) return true
    return false
}