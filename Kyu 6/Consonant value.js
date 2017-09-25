// A consonant is any letter of the alphabet except a,e,i,o,u.
//  The consonant substrings in the word "zodiacs" are z,d,cs. Assuming a = 1,b = 2 ... z = 26, the values of these substrings are 26,4,22 because z=26,d=4,cs=3+19=22. The maximum value of these substrings is 26. Therefore, solve("zodiacs") = 26.

// Given a lowercase string that has alphabetic characters only and no spaces,
//  return the highest value of consonant substrings.



//MY SOLUTION



function solve(s) {
// Init 2 arrays: arrays of consonants char and value
const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
const conValue = [2,3,4,6,7,8,10,11,12,13,14,16,17,18,19,20,22,23,24,25,26]
// Create an array to hold all the result
let result = [];
// Create an array to hold current result
let instance = [];

// Convert pass in string to an array
let array = s.split("");
// Loop throu that array
array.forEach((item, index, array) => {
    // Check if it is next to each other
    if(consonants.includes(item)){
        if(consonants.includes(array[index - 1]) || consonants.includes(array[index + 1])){
            instance.push(item)
        }
        else{
            result.push([item])
            result.push(instance)
            instance = []
        }
        if(index === array.length - 1) {
            result.push(instance)
            instance = []
        }
        
    } else {
        result.push(instance)
            instance = []
    }
    
}) 
// Find the the one that holds the most value
let maxValue = 0;
result
result.forEach((item,index) => {
    currentValue = 0;
    item.forEach((item2) => {
        currentValue += conValue[consonants.indexOf(item2)]
    })
    if(currentValue > maxValue){
        maxValue = currentValue
    }
})

// return it
  return maxValue;
};



// console.log(solve("zodiac")); //26
console.log(solve("codewars")); //37
console.log(solve("chruschtschov")); //80
console.log(solve("khrushchev")); //38
console.log(solve("strength")); //57
console.log(solve("catchphrase")); //73 
console.log(solve("twelfthstreet")); //103
console.log(solve("mischtschenkoana")); //80



// OTHERS' SHORT SOLUTION

function solve(s) {
  var result = 0
  
  var resultArray = s.split(/[aeiou]/g)
   
  var a = 97;
  var charArray = {};
  for (var i = 0; i<26; i++) {
      charArray[String.fromCharCode(a + i)] = i + 1;
  }
  
  var numArray = []
  resultArray.filter(num=> num != '').map(char => {
    if (char.length === 1) {
      numArray.push(charArray[char])
    } else {
      var alphaSum = 0;

      char.split("").map(alphaChar => {
         alphaSum += charArray[alphaChar]
      })
      
      numArray.push(alphaSum)
    }
  })
  
  return Math.max(...numArray);
};