function anagrams(word, words) {
    const allWord = word.split('');
    var result = [];
    words.forEach(word => {
        var arr = word.split('')
        allWord.forEach((letter) => {
            if(arr.includes(letter)){
               arr.splice(arr.indexOf(letter), 1) 
            }
        })
        if(arr.length === 0){
            result.push(word)
        }
    })

    return result
    

}






console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) // => ['aabb', 'bbaa']

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])) // => ['carer', 'racer']

console.log(anagrams('laser', ['lazing', 'lazy',  'lacer'])) // => []




// String.prototype.sort = function() {
//   return this.split("").sort().join("");
// };

// function anagrams(word, words) {
//   return words.filter(function(x) {
//       return x.sort() === word.sort();
//   });
// }