// The vowel subsequences in the word codewarriors are o,e,a,io. The longest of these has a length of 2. 
// Given a lowercase string that has alpahbetic characters only and no spaces, return the length of the longest vowel subsequence.

//a, e, i, o, u

function solve(s){
 // covert to array
 var pharray = s.split("");
 console.log(pharray);
 var vowels = ['a','e','i','o','u'];
 var result = [];
 var instance = [];
 // map throu that array
 pharray.forEach((item,index,array) => {
     if(vowels.includes(item)){
        if(vowels.includes(array[index + 1]) || vowels.includes(array[index - 1])){
            console.log(item)
            instance.push(item)
        }
        else {
            result.push(instance)
            result.push([item])
            instance = []

        }
     } else {
            result.push(instance)
            instance = []
        }
 })

 console.log(result)
 // if the next item or the item before is vowel then push it into an array
 // after that push it into another array
 // Loop throu the result array, find out the longest one and return the length of it
 var max = 0;   
 result.forEach((item) => {
    if(item.length > max){
        max = item.length
    }
 }) 
 return max;
}

// console.log(solve("codewarriors")); //2
// console.log(solve("suoidea")); //3
// console.log(solve("ultrarevolutionariees")); //3
console.log(solve("strengthlessnesses")); //1
// console.log(solve("cuboideonavicuare")); //2
// console.log(solve("chrononhotonthuooaos")); //5
// console.log(solve("iiihoovaeaaaoougjyaw")); //8


//SHORT SOLUTIONS:
//FIRST
var solve = s => s.split(/[^aeiou]/).reduce((s,n)=> Math.max(s,n.length),0);

//SECOND
function solve(s){
 return Math.max(...s.split(/[^aeiou]+/).map(x=>x.length));
}

