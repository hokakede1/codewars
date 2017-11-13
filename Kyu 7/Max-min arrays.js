//https://www.codewars.com/kata/max-min-arrays/train/javascript



// function solve(arr){
//     var result = [];
  
//     for(i = true; i=== true; null){
//         if(arr.length > 1){
//             var min = Math.min(...arr)
//             var max = Math.max(...arr)
//             result.push(max,min)
//             arr.splice(arr.indexOf(min),1)
//             arr.splice(arr.indexOf(max),1)
//         } else if (arr.length === 1){
//             result.push(arr[0])
//             arr.splice(0,1)
//         } else {
//             i = false
//         }
//     }
//     return result
// };

function solve(arr){
  var minMax = [];
  arr.sort((a,b)=>a-b);
  for(var i = 0, j = arr.length-1; i <= j; i++,j--){
    if(i != j) minMax.push(arr[j]), minMax.push(arr[i]);
    else minMax.push(arr[i]);
  }
  return minMax;
}



console.log(solve([15,11,10,7,12])) //,[15,7,12,10,11]);
console.log(solve([91,75,86,14,82])) //,[91,14,86,75,82]);
console.log(solve([84,79,76,61,78])) //,[84,61,79,76,78]);
console.log(solve([52,77,72,44,74,76,40])) //,[77,40,76,44,74,52,72]);
console.log(solve([1,6,9,4,3,7,8,2])) //,[9,1,8,2,7,3,6,4]);
console.log(solve([78,79,52,87,16,74,31,63,80])) //,[87,16,80,31,79,52,78,63,74])


