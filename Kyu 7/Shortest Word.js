

// function findShort(s){
//     return Math.max(...s.split(' ').map(item => item.length))
// }


var findShort = (s) => Math.min(...s.split(' ').map(item => item.length))


console.log(findShort("bitcoin take over the world maybe who knows perhaps")) //, 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones")) //, 3); 