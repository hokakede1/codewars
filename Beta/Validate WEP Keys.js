
// link to instruction https://www.codewars.com/kata/validate-wep-keys/train/javascript


let validate = (keys) => {
//get it
 var partone = [];
 var result;
 for(i = 20; i < 80; i++){
     partone.push(String(i))
 }
 partone.push('4A','4B','4C','4D','4E','4F','6A','6B','6C','6D','6E','6F','7A')
 if(keys.length % 2 === 0){
     var arr = keys.match(/(..?)/g);
     result = arr.map((item) => {
         if(partone.includes(item.toUpperCase())){
             return true
         } else {
             return false
         }
     }) 
     result = result.filter((item) => item === true)
    if(result.length === arr.length){
     return true
    }
 }
 
 return false
}




console.log(validate('686920687579')) //true
console.log(validate('6869206368726973')) //true
console.log(validate('7065616E75742062757474657220616E64206A656C6C79')) //true

 console.log(validate('68692068757')) //false
 console.log(validate('6C133374737033346B')) //false
console.log(validate('696e74657266616365')) //false