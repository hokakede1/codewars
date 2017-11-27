// Test Cases

Test.describe('Final Tests', () => {

  function base(a,b,c){
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
  var random = triangleSideGen()
  
  it('Should pass the random test cases', () => {
  random.forEach((c,i) => {
    Test.assertEquals(insert(c[0], c[1], c[2]), base(c[0],c[1],c[2])) 
  })
})

  
})




//Completed Solution 

function insert(a,b,c){
    return a + b > c && a + c > b && b + c > a ? true : false 
}


// Init Solution 
function insert(a,b,c){

}


// Sample Test

Test.describe('Sample Tests', () => {
  Test.assertEquals(insert(1,2,3), false);
  Test.assertEquals(insert(1,3,5), false);
  Test.assertEquals(insert(2,4,6), false);
  Test.assertEquals(insert(2,2,1), true);
  Test.assertEquals(insert(5,2,4), true);
  Test.assertEquals(insert(3,9,7), true);
})


// hey what is up