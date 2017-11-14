//https://www.codewars.com/kata/did-i-finish-my-sudoku/train/javascript



function doneOrNot(board){
  //your code here
  // 27
  var result = [];
  var box1 = [];
  var box2 = [];
  var box3 = [];
  //solve all cols
  board.forEach(item => {
      result.push(unique(item))
  })
  //solve all rows
  for(i = 0; i <= 8; i++){
    var rows = board.map(arr => arr[i])
    result.push(unique(rows))
  }

  //solve all boxes

  for(i = 0; i <= 9; i++ ){
      if(box1.length === 9 && box2.length === 9 && box3.length === 9){
          console.log(i)
          result.push(unique(box1))
          result.push(unique(box2))
          result.push(unique(box3))
          box1 = [];
          box2 = [];
          box3 = [];
          i--
      } else if (i < 9){
          board[i].forEach((item, index) => {
              if(index <= 2){
                  box1.push(item)
              } else if(index <= 5){
                  box2.push(item)
              } else if(index <= 8){
                  box3.push(item)
              }
          })
      }
  }
      


  

  return result.filter(item => item === true).length === 27 ? "Finished!" : "Try again!";

  

}


function unique(arr){
    var result = arr.slice().sort((a,b) => a - b).filter((item, index) => item ===  index + 1)
    return result.length === arr.length ? true : false
}


console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                         [6, 7, 2, 1, 9, 5, 3, 4, 8],
                         [1, 9, 8, 3, 4, 2, 5, 6, 7],
                         [8, 5, 9, 7, 6, 1, 4, 2, 3],
                         [4, 2, 6, 8, 5, 3, 7, 9, 1],
                         [7, 1, 3, 9, 2, 4, 8, 5, 6],
                         [9, 6, 1, 5, 3, 7, 2, 8, 4],
                         [2, 8, 7, 4, 1, 9, 6, 3, 5],
                         [3, 4, 5, 2, 8, 6, 1, 7, 9]])) //, "Finished!");
                                
console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                         [6, 7, 2, 1, 9, 0, 3, 4, 9],
                         [1, 0, 0, 3, 4, 2, 5, 6, 0],
                         [8, 5, 9, 7, 6, 1, 0, 2, 0],
                         [4, 2, 6, 8, 5, 3, 7, 9, 1],
                         [7, 1, 3, 9, 2, 4, 8, 5, 6],
                         [9, 0, 1, 5, 3, 7, 2, 1, 4],
                         [2, 8, 7, 4, 1, 9, 6, 3, 5],
                         [3, 0, 0, 4, 8, 1, 1, 7, 9]])) //, "Try again!");