//https://www.codewars.com/kata/scramblies/train/javascript


function scramble(str1, str2) {
 //code me
 var string2 = str2.split('')
 var string1 = str1.split('')
 var result = string2.map(item => {
     if(string1.includes(item)){
        string1.splice(string1.indexOf(item), 1)
        return item
     }
})

 return result.join('') === str2 ? true : false
}



function scramble(str1, str2) {
 //code me
 var string1 = str1.split('')
 var result = str2.split('').map(item => {
     if(string1.includes(item)){
        string1.splice(string1.indexOf(item), 1)
        return item
     }
})

 return result.join('') === str2 ? true : false
}



//  console.log(scramble('rkqodlw','world')) //,true);
//   console.log(scramble('cedewaraaossoqqyt','codewars')) //,true);
//   console.log(scramble('katas','steak')) //,false);
//   console.log(scramble('scriptjava','javascript')) //,true);
//   console.log(scramble('scriptingjava','javascript')) //,true);
//   console.log(scramble('scriptsjava','javascripts')) //,true);
//   console.log(scramble('jscripts','javascript')) //,false);
//   console.log(scramble('aabbcamaomsccdd','commas'))
  console.log(scramble('scriptjavx','javascript')) //,false);
