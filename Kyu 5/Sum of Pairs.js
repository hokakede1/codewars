// Given a list of integers and a single sum value,
//return the first two values (parse from the left please) in order of appearance that add up to form the sum.


//MY SOLUTION

// var sum_pairs=function(ints, s){
//     var result = [];
//     var time = 0;
//     //Going to create 2 nest loops for 1 number looking for a pair
//     ints.forEach((currentNum,index1,array) => {
//         // Slice out the current number
//         var testArray = array.slice(index1 + 1)
//         // Loop throu the rest of the array

//         testArray.forEach((item,index) => {
//             console.log(`at ${currentNum} has ${item}`)
//             // if there is a pair push them into result
//             // check if it is the first time
            
//             if(currentNum + item === s){
//                     console.log([currentNum, item])
//                     result.push([currentNum, item])
                
//             }
//         })
//     })
    
//     //Check for result, if nothing return undefined
//     return result.length === 0 ? undefined : result[0]
// }









//FIX SOLUTION : UNDERSTAND THIS
  var sum_pairs=function(ints, s){
  var mem = {}
  for (var i = 0; i < ints.length; ++i) {
     console.log(mem)
    if (mem[s - ints[i]]) {
        console.log(i)
        return [s - ints[i], ints[i]]
    };
    
    mem[ints[i]] = true
  }
}




console.log(sum_pairs([1, 4, 8, 7, 3, 15], 8));//[1, 7]
//  console.log(sum_pairs([5, 9, 13, -3], 10)); //[13, -3]
//  console.log(sum_pairs([10,5,2,3,7,5], 10)); //[3, 7]

//  console.log(sum_pairs([1,2,3,4,1,0], 2));
//  console.log(sum_pairs([4,-2,3,3,4], 8));