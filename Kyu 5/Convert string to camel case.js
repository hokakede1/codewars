// https://www.codewars.com/kata/convert-string-to-camel-case

// function toCamelCase(str){
//  var array = str.split(/[\-_]+/)
//  return array.map((item => item.charAt(0).toUpperCase() + item.slice(1))).join('')
// }

function toCamelCase(str){
 return str.split(/[\-_]+/).map(((item,index) => {
     return index === 0 ? item : item.charAt(0).toUpperCase() + item.slice(1)
 })).join('')
}



console.log(toCamelCase('')) //, '', "An empty string was provided but not returned")
console.log(toCamelCase("the_stealth_warrior")) //, "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
console.log(toCamelCase("The-Stealth-Warrior")) //, "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
console.log(toCamelCase("A-B-C")) //, "ABC", "toCamelCase('A-B-C') did not return correct value")
