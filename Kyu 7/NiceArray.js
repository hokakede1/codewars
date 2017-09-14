//A Nice array is defined to be an array where for every value n in the array, there is also an element n-1 or n+1 in the array.



//MY SOLUTION

arr1 = [2,10,9,3] // return TRUE
arr2 = [3,4,5,7] // return FALSE

function isNice(arr){
  const result = arr.map((item,index,arr) => {
      option1 = item + 1;
      option2 = item - 1;

      if(arr.includes(option1) || arr.includes(option2)){
          return true
      } else { return false }
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

console.log(isNice(arr2))