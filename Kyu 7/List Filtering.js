//https://www.codewars.com/kata/list-filtering/train/javascript



var filter_list = (l) => l.filter(item => typeof item !== 'string')


console.log(filter_list([1,2,'a','b'])) //,[1,2])
console.log(filter_list([1,'a','b',0,15])) //,[1,0,15])
console.log(filter_list([1,2,'aasf','1','123',123])) //,[1,2,123])