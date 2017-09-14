//Write

// function remove(str, what)
// that takes in a string str(text in Python) and an object/hash/dict/Dictionary what and returns a string with the chars removed in what. For example:

// remove('this is a string',{'t':1, 'i':2}) === 'hs s a string'
// remove from 'this is a string' the first 1 't' and the first 2 i's.


//MY SOLUTION

function remove(str, what) {
  var arrayStr = str.split('');
  for (var prop in what){
      if(arrayStr.includes(prop)){
          for(i=0; i < what[prop]; i++){
            if(arrayStr.includes(prop)){
              arrayStr.splice(arrayStr.indexOf(prop),1)
            }
          }
      }
  }
  console.log(arrayStr)
  var result = arrayStr.join('')
  return result
}

//Test Cases
console.log(remove('this is a string',{'t':1, 'i':2})); //expect 'hs s a string'
console.log(remove('hello world',{'x':5, 'i':2})); //Expect 'hello world'
console.log(remove('apples and bananas',{'a':1, 'n':1})); //expect 'pples d bnns'
remove('a',{'a':1, 'n':1}); //expect ''
remove('codewars',{'c':5, 'o':1, 'd':1, 'e':1, 'w':1, 'z':1, 'a':1, 'r':1, 's':1}) // expect ''


// BEST SOLUTION


function remove(str, what) {
  for(var key in what) for(i=0; i< what[key]; i++) str = str.replace(key, '');
  return str;
}
// replace has the same behave as index of
