//https://www.codewars.com/kata/greed-is-good/train/javascript


//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point

// function score( dice ) {
//   // Fill me in!
//   var sum = 0;
//   dice.sort((a,b) => a - b).forEach((item, index, array) => {
    
//     if (index > 2 && item === 2 && array[index - 1] === 2 && array[index - 2] === 2){
//         sum += 200
//     } else if (index > 1 && item === 3 && array[index - 1] === 3 && array[index - 2] === 3){
//         sum += 300
//     } else if (index > 1 && item === 4 && array[index - 1] === 4 && array[index - 2] === 4){
//         sum += 400
//     } else if (index > 1 && item === 5 && array[index - 1] === 5 && array[index - 2] === 5){
//         sum += 500
//     } else if (index > 1 && item === 6 && array[index - 1] === 6 && array[index - 2] === 6){
//         sum += 600
//     } else if (index > 1 && item === 1 && array[index - 1] === 1 && array[index - 2] === 1){
//         sum += 1000
//     } else if(item === 1 && array[index + 1] !== 1 && array[index + 2] !== 1){
//         sum += 100
//     } else if (item === 5 && array[index + 1] !== 5 && array[index + 2] !== 5){
//         sum += 50
//     }
//   })

//   return sum
// }




function score( dice ) {
  // Fill me in!
  var tripple = [1000,200,300,400,500,600]
  var single = {
      1:100,
      5:50}
  var sum = 0;
  var sorted = dice.sort((a,b) => a - b)
  var tripArr = dice.filter((item,index,array) => item === array[index + 1] && item === array[index + 2] && item !== array[index + 3])
  tripArr.forEach(item => {
      for(i = 0; i < 3; i++){
          dice.splice(dice.indexOf(item), 1)
      }
      sum += tripple[item - 1]
      
  })
  console.log(sum)

  dice.forEach(item => {
      console.log(item)
      if(single[item]){
          console.log(single[item])
      sum += single[item]}
  })
  console.log(sum)
  return sum
}


// console.log( score( [2, 3, 4, 6, 2] ) == 0) //,   "Should be 0 :-(" );
// console.log( score( [4, 4, 4, 3, 3] ) == 400) //, "Should be 400" );
// console.log( score( [ 1, 1, 1, 3, 3 ] ) == 1000)
console.log(score( [3,3,3,3,3] ) == 300) //, "Should be 450" );