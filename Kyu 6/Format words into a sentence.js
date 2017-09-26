// Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string. Empty string values should be ignored. Empty arrays or null/nil values being passed into the method should result in an empty string being returned.

// formatWords(['ninja', 'samurai', 'ronin']) // should return "ninja, samurai and ronin"
// formatWords(['ninja', '', 'ronin']) // should return "ninja and ronin"
// formatWords([]) // should return ""


function formatWords(words){
    
  if(!words){
    return ""  
  }
  var hello = words.filter(item => item !== '')
  var result = [];
  hello.forEach((item,index,array) => {
    if(index === array.length - 2 ){
     result.push(item)
     result.push(' and ') 
     
    } else if (index !== array.length - 1) {
     result.push(item)
     result.push(', ')
    } else {
        result.push(item)
    }
  })
  return result.join('')
}

// console.log(formatWords(['one','two','three']));
// console.log(formatWords(['one','two','three','four']));
// console.log(formatWords(['one','two']));
console.log(formatWords(['one','','three','four']));
console.log(formatWords(['one','','','four']));
console.log(formatWords([]));
console.log(formatWords(null));
console.log(formatWords([]));

// OTHER SOLUTION:

function formatWords(words){
  if (!words) return "";
  return words.filter(function(a) { return a !== ''}).join(', ').replace(/(, )+(\S+)$/, ' and $2');
}