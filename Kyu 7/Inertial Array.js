// An array is defined to be inertialif the following conditions hold:

// a. it contains at least one odd value  
// b. the maximum value in the array is even 
// c. every odd value is greater than every even value that is not the maximum value.
// eg:-

// So [11, 4, 20, 9, 2, 8] is inertial because 
// a. it contains at least one odd value [11,9] 
// b. the maximum value in the array is 20 which is even 
// c. the two odd values (11 and 9) are greater than all the even values that are not equal to 20 (the maximum), i.e., [4, 2, 8]
// Write a function called isInertial that accepts an integer array and returns true if the array is inertial; otherwise it returns false.

function isInertial(arr){
    //find the max value of the array and check if that if is even
    var max = Math.max.apply(null, arr);
    if(max % 2 === 0){
        let count = 0;
        //then map throu the array to find how many odd value
        var mirrorArr = arr.map((item) => {
            if(item % 2 !== 0){
                count++
            }
            return item
        })
        //Splice out the highest number and compair it with the odds
        if(count >= 1){
           let result = []; 
           mirrorArr.splice(arr.indexOf(max), 1);
           const evenArr = mirrorArr.filter((item) => {
               if(item % 2 !== 0){
                   result.push(item)
               }
               return item % 2 == 0
           }) 
           var truth = 0;
           result.forEach((item) => {
               evenArr.forEach((item2) => {
                   if(item > item2){
                    truth++
                   }
               })
           })
           if(truth === (result.length * evenArr.length)){
               return true
           }
        }
    }
    
    
    return false;
}



console.log(isInertial([11, 4, 20, 9, 2, 8])); //true



// OTHER SHORT SOLUTION

let isInertial=(a)=>(m=Math.max(...a),a.some(x=>x%2)&&m%2==0&&a.every(x=>x==m||x%2||x<Math.min(...(a.filter(x=>x%2)))))