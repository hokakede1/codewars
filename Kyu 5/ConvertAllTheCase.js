//https://www.codewars.com/kata/convert-all-the-cases/train/javascript


//Testes





const changeCase = (identifier, targetCase) => {
    if(identifier === ""){
        return ""
    } 
    
}

const diagnoseType = (name) => {
    let kebabCheck = name.split('-'); 
    let snakeCheck = name.split('_');
    if(kebabCheck[0] !== name){
        return "kebab"
    }
    if(snakeCheck[0] !== name){
        return "snake"
    }
    return "camel"
}

const filter = (str) => {
    let strSplit = str.split('');
    let dash = strSplit.filter(i => i === "-");
    let lodash = strSplit.filter(i => i === "_");
    let camel = strSplit.filter(i => i == i.toUpperCase());
    if(dash.length > 0 && lodash.length === 0 && camel.length === 0)
}

const transform = (str, strType, transType) => {

}

console.log(changeCase("snakeCase", "snake")) //"snake_case"
console.log(changeCase("some-lisp-name", "camel"))//"someLispName"
console.log(changeCase("map_to_all", "kebab"))//"map-to-all"
console.log(changeCase("doHTMLRequest", "kebab"))//"do-h-t-m-l-request"
console.log(changeCase("invalid-inPut_bad", "kebab"))
console.log(changeCase("valid-input", "huh???")) // undefined
console.log(changeCase("", "camel")) //""