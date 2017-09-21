// Write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') between each two odd numbers in num. 
// For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

function insertDash(num) {
   //code me
   var result = []
   var subresult = String(num).split('');
   subresult.forEach((item,index,array) => {
    //check if next index is 
    if(array[index - 1] % 2 !== 0 && item % 2 !== 0 && index !== 0){
        result.push(`-${item}`)
    }
    else{
        result.push(String(item))
    }
   })
   return result.join('')
}

console.log(insertDash(454793))
//'4547-9-3'
console.log(insertDash(123456))
//'123456'
console.log(insertDash(1003567))
//'1003-567'



// BEST SOLUTION 
function insertDash(num) {
   return num.toString().replace(/[13579](?=[13579])/g, "$&-");
}