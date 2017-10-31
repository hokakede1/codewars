//https://www.codewars.com/kata/by-3-or-not-by-3-that-is-the-question/train/javascript


function divisibleByThree(str){
    return str.split('').reduce((a,b) => parseInt(a) + parseInt(b)) % 3 === 0
  }

  console.log(divisibleByThree('123')) //, true, "Should return true if the sum of the given digits is divisible by 3.")
  console.log(divisibleByThree('19254')) //, true, "Should return true if the sum of the given digits is divisible by 3.")
  console.log(divisibleByThree('88')) //, false, "Should return false if the sum of the given digits is not divisible by 3.")
  console.log(divisibleByThree('1')) //  false, "Should return false if the sum of the given digits is not divisible by 3.")