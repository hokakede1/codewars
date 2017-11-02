// https://www.codewars.com/kata/stop-gninnips-my-sdrow/train/javascript



function spinWords(string){
  var array = string.split(' ')
  var results = array.map((item,index) => {
      if(item.length < 5){
          return item
      } else {
          return item.split('').reverse().join('')
      }
  })
  return results.join(' ')
}

function spinWords(str){
  return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');
}


console.log(spinWords("Hey fellow warriors")) //, "Hey wollef sroirraw");