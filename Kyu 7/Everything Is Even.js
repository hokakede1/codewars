// Here at Conformity Inc. we only like even things. We need you to put a stop to anything that does not conform to our strict even only policy.

// Write a function that will convert any number to its nearest even number. When the number is halfway between two even numbers it should round away from zero.

// Examples

// 1 => 2

// 0.5 => 0

// -1 => -2

// -0.5 => 0



function ensureEven(n) {
  // Code on squire...
  if(n < 1 && n > 0) {
      return 0
  } else if ( n > -1 && n < 0){
      return 0
  }
  else if ( n >= 0 ) {
      if(n % 2 === 0){
          return parseInt(n)
      }
      else {
          return parseInt(n + 1)
      }
  }
  else if ( n <= 0){
      if(n % 2 === 0){
          return parseInt(n)
      }
      else {
          return parseInt(n - 1)
      }
  }
}

console.log(ensureEven(1)) // 2
console.log(ensureEven(0.5)) // 0
console.log(ensureEven(-1)) // -2
console.log(ensureEven(-0.5)) // 0


// BEST SOLUTION :
const ensureEven = n => Math.round(n/2) * 2 ;