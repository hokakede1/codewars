//https://www.codewars.com/kata/complementary-dna/train/javascript


function DNAStrand(dna){
  //your code here
  var result = dna.split('').map(item => {
      switch(item){
        case 'A':
            return 'T'
        case 'C':
            return 'G'
        case 'T':
            return 'A'
        case 'G':
            return 'C'
        default: 
            return ''
      }
  })
  return result.join('')
}

console.log(DNAStrand("AAAA")); //TTTT
console.log(DNAStrand("ATTGC")); //TAACG
console.log(DNAStrand("GTAT")); //CATA