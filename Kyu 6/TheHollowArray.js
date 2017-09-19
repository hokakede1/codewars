// An array is said to be hollow if it contains 3 or more 0s in the middle that are preceded and followed by the same number of non-zero elements. Furthermore, all the zeroes in the array must be in the middle of the array.

// Write a function named isHollow/is_hollow/IsHollow that accepts an integer array and returns true if it is a hollow array,else false.






function isHollow(x){
var count = 0;
x.forEach((item,index,array) => {
  if(item === 0){
    count++
    console.log(x[index-1] !== 0,x[index+1] !== 0)
    if(x[index-1] !== 0 && x[index+1] !== 0 ){
    count = 0;
  }
  }
  

})
console.log(count)
if(count >= 3){
 var result = x.filter((item) => {
  return item !== 0
 })
 
  if(result.length % 2 === 0 ){
   return true
  }
}
 return false
}



console.log(isHollow([-1,0,0,0,3]));
//true
console.log(isHollow([1,0,0,0,0]));
//false
console.log(isHollow([ -6, -3, -3, 8, -5, -4]));

console.log(isHollow([ 1, 3, 0, 0, -2, 7, 8, 9, 0, 5, 4 ]));
console.log(isHollow([ -9999, 10000, 0, 0, -2, 7, 8, 9, 0, 5, 4 ]))

//SHORTWAY 
function isHollow(x){
  return /^(1*)0{3,}\1$/.test(x.map(x=>x?1:0).join(''))
}
// ask someone to explain


//BEST SOLUTION
function isHollow(x){  
  
  while(x.length > 2 && x[0] !== 0 && x[x.length-1] !== 0){
    x.shift();
    x.pop();
  }
  
  return x.length > 2 && x.every(i => i === 0);
}
