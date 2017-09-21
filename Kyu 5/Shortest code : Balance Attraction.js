// Shortest code : Balance Attraction
// (Code length limit: 200 chars)

// This is the challenge version of coding three minutes series. If you feel difficult, please complete the simple version

// #Task:

// Insert some characters into a string, if there are the same characters in the string, they attract each other.

// ```
// sc("abc",["b"]) === "abbc"
// ```
// If there are two or more parts in a string, both have the same character. Character will be added to the shorter character chain.
// ```
// sc("abbbab",["b"]) === "abbbabb"
// sc("ababbb",["b"]) === "abbabbb"
// ```
// If there are two or more parts in a string, both have the same character, and chains have same length. Character will be added to the left one.
// ```
// sc("ababab",["b"]) === "abbabab"
// ```
// If there is no same character in the string, add character to the end of string.
// ```
// sc("ab",["c"]) === "abc"
// ```

// input: string ```str```, string array ```chars```，insert ```chars``` into ```str```, str and char range is a-z.

// output: the ```str``` after insert ```chars```
// #Code length calculation

// In javascript, we can't get the user's real code, we can only get the system compiled code. Code length calculation is based the compiled code.

// For example: 

// If you typed ```sc=x=>x+1```  
// after compile, it will be:```sc=function(x){return x+1;}```

function sc(s,c){
  c.forEach(c => {
    m=s.match(new RegExp(c+'+','g'))
    s=!m?s+c:s.replace(new RegExp('([^'+c+']|^)('+c+'{'+Math.min(...m.map(n=>n.length))+'})(?!'+c+')'),(m,p,q)=>p+q+c)
  })
  return s
} 



console.log(sc("xyx",["x"]))
// "xxyx"
console.log(sc("xxyx",["x"]))
// "xxyxx"
console.log(sc("x",["x","x","x"]))
// "xxxx"
console.log(sc("xyyyxyy",["y"]))
// "xyyyxyyy"
console.log(sc("abababab",["b"]))
//  "abbababab"
console.log(sc("abbababab",["b"]))
//  "abbabbabab"
console.log(sc("abbabbabab",["b"]))
//  "abbabbabbab"
console.log(sc("abbabbabbab",["b"]))
//  "abbabbabbabb"
console.log(sc("abababab",["b","b","b","b"]))
//  "abbabbabbabb"
console.log(sc("abababab",["a","a","a","a","b","b","b","b"]))
// "aabbaabbaabbaabb"
console.log(sc("ab",["c"]))
// "abc"