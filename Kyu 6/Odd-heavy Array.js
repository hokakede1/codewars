// Array [11,4,9,2,8] is odd-heavy 
// because:- its odd elements [11,9] are greater than all the even elements [4,2,8]

// Array [11,4,9,2,3,10] is not odd-heavy
// because:- one of it's even element 10 from [4,2,10] is greater than two of its odd elements [9,3] from [ 11,9,3]


function isOddHeavy(n){
    var odd = n.filter(item => item % 2 !== 0)
    var even = n.filter(item => item % 2 === 0)
    count = 0;
    
    if(odd.length === 0){
        return false
    }
    odd.forEach((oddItem) => {
        even.forEach(evenItem => {
            if(oddItem > evenItem){
                count++
            }
        })
    })
    if(count === even.length * odd.length){
        return true
    } else {
        return false
    }
}


console.log(isOddHeavy([0,2,19,4,4])) //true
console.log(isOddHeavy([1,-2,-1,2])) //false
console.log(isOddHeavy([0,0,0,0,0]))
// console.log(isOddHeavy([3,6,14,53,5,34,67,34,2,13])) 