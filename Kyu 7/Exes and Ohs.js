// https://www.codewars.com/kata/exes-and-ohs/train/javascript

function XO(str) {
    //code here
    let exes = 0;
    let ohs = 0;
    str.split('').forEach(item => {
        if(item === 'x' || item === 'X'){
            exes++
        } else if(item === 'o' || item === 'O'){
            ohs++
        }
    })
    return exes === ohs
}


console.log(XO('xo')) //,true);
console.log(XO("xxOo")) //,true);
console.log(XO("xxxm")) //,false);
console.log(XO("Oo")) //,false);
console.log(XO("ooom")) //,false);