// I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

// Example:

stringOne = 'car door';
stringTwo = 'cat bore';
console.log(stringOne.length)
console.log(stringOne.substring( 9 ,stringOne.length))

function mutateMyStrings(stringOne, stringTwo){
    let result = stringOne + '\n';
    for(var i = 0; i < stringOne.length; i++){
        // if(i === 1){
        //     result += stringTwo.substring(0,i) + stringOne.substring(i,stringOne.length + 1) + '\n'
        // }
      if(stringOne.charAt(i) !== stringTwo.charAt(i)){          
          result += stringTwo.substring(0,i + 1) + stringOne.substring(i + 1,stringOne.length + 1) + '\n'
      }
    }
    return result
}

console.log(mutateMyStrings('bubble gum', 'turtle ham'))
// bubble gum 
// tubble gum 
// turble gum
// turtle gum
// turtle hum
// turtle ham


// BEST SOLUTION

function mutateMyStrings(string1, string2) {
  let res = [string1];
  for (let i = 0; i < string1.length; i++)
    if (string1[i] != string2[i])
      res.push(string2.slice(0, i + 1) + string1.slice(i + 1));
  res[res.length - 1] += '\n';
  return res.join('\n');
}


// SHORT SOLUTION
function mutateMyStrings(stringOne, stringTwo){
   var r=[...stringOne+' '].map((a,i)=>stringTwo.slice(0,i)+stringOne.slice(i));
   return r.filter((a,i)=>r.indexOf(a)==i).join('\n')+'\n';
}
