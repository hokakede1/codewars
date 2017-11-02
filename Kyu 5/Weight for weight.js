// https://www.codewars.com/kata/weight-for-weight/train/javascript



function orderWeight(strng) {
    // your code
    var arr = strng.split(' ');
    var indexs = arr.map((item, index) => {
        
        return {value: item.split('').reduce((a,b) => parseInt(a) + parseInt(b)), number: item}
    })
    indexs.sort(function(a, b) {
        return a.value - b.value;
    });
    var listOfValues = indexs.map(item => item.value)
}




// console.log(orderWeight("103 123 4444 99 2000")) //, "2000 103 123 4444 99")
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")) //, "11 11 2000 10003 22 123 1234000 44444444 9999")