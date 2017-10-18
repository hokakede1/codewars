

//https://www.codewars.com/kata/valid-parentheses/train/javascript



function validParentheses(parens){
  // Split every char in the string into item in array
  var arr = parens.split('');
  // Seperate all item with "(" and ")" and compare the number if its the same
  return arr.filter(item => item === '(').length === arr.filter(item => item === ')').length
}




  
console.log(validParentheses( "()" )); //true
console.log(validParentheses( "())" )); //false