function capitalize(s,arr){
  return s.split('').map((item,index) => arr.includes(index) ? item.toUpperCase() : item).join('')
};


var capitalize = (s,arr) => s.split('').map((item,index) => arr.includes(index) ? item.toUpperCase() : item).join('')





console.log(capitalize("abcdef",[1,2,5])) //,'aBCdeF');
console.log(capitalize("abcdef",[1,2,5,100])) //,'aBCdeF');
console.log(capitalize("codewars",[1,3,5,50])) //,'cOdEwArs');
console.log(capitalize("abracadabra",[2,6,9,10])) //,'abRacaDabRA');
console.log(capitalize("codewarriors",[5])) //,'codewArriors');
console.log(capitalize("indexinglessons",[0])) //,'Indexinglessons');