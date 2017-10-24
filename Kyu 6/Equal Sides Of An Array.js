function findEvenIndex(arr)
{
  var result = -1
  arr.forEach((item,index, arr)=> {
    var firstHalf = index !== 0 ? arr.slice(0,index).reduce((a,b) => a + b) : 0
    var secondHalf = index !== arr.length - 1 ? arr.slice(index + 1, arr.length).reduce((a,b) => a + b) : 0
    if(firstHalf === secondHalf)
    {
        result = index
    }
  })

  return result
}




    console.log(findEvenIndex([1,2,3,4,3,2,1])) //3;
    console.log(findEvenIndex([1,100,50,-51,1,1])) //1;
    console.log(findEvenIndex([1,2,3,4,5,6])); //-1
    console.log(findEvenIndex([20,10,30,10,10,15,35])); //3

