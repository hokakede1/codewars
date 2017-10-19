

//https://www.codewars.com/kata/valid-parentheses/train/javascript



function validParentheses(parens){
  // Split every char in the string into item in array
  var arr = parens.split('');
  var first = arr.filter(item => item === '(').length === arr.filter(item => item === ')').length;
  // Seperate all item with "(" and ")" and compare the number if its the same
  var second = parens.charAt(0) === '(' && parens.charAt(arr.length - 1) === ')'
  return first && second
}




  
console.log(validParentheses( "()" )); //true
console.log(validParentheses( ")()()()(" )); //false