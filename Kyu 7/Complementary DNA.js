//https://www.codewars.com/kata/complementary-dna/train/javascript


var pairs = {'A':'T','T':'A','C':'G','G':'C'};
// function DNAStrand(dna){
//   //your code here
//   var result = dna.split('').map(item => {
//       switch(item){
//         case 'A':
//             return 'T'
//         case 'C':
//             return 'G'
//         case 'T':
//             return 'A'
//         case 'G':
//             return 'C'
//         default: 
//             return ''
//       }
//   })
//   return result.join('')
// }

console.log(DNAStrand("AAAA")); //TTTT
console.log(DNAStrand("ATTGC")); //TAACG
console.log(DNAStrand("GTAT")); //CATA




function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}