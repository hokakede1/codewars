// Move the first letter of each word to the end of it, then add 'ay' to the end of the word.
// Simple Pig Latin


function pigIt(str){
  //Code here
  var array = str.split(' ');
  var result = array.map(item => {
      return `${item.slice(1)}${item.charAt(0)}ay`
  })
  return result.join(' ')
}




console.log(pigIt('Pig latin is cool')) // 'igPay atinlay siay oolcay'
console.log(pigIt('This is my string')) //'hisTay siay ymay tringsay'