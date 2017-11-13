//Triangle Inequality Theorem



// Passing in 3 sides A B C, A + B > C, B + C > A, A + C > B

function insert(a,b,c){
    return a + b > c && a + c > b && b + c > a ? true : false 
}


function triangleSideGen(){
    var arr = []
    for(i = 0; i < 60; i++){
    var side1 = Math.floor(Math.random() * (10 - 1)) + 1
    var side2 = Math.floor(Math.random() * (10 - 1)) + 1
    var side3 = Math.floor(Math.random() * (10 - 1)) + 1
    arr.push([side1, side2, side3])
}

    return arr

}




 console.log(insert(1,2,3)) //, false);
  console.log(insert(1,3,5)) //, false);
  console.log(insert(2,4,6)) //, false);
  console.log(insert(2,2,1)) //, true);
  console.log(insert(5,2,4)) //, true);
  console.log(insert(3,9,7)) //, true);




