function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b==0){
        return "Cannot divide by zero";
    }
    return a/b;
}

// export {
//     add,
//     subtract,
//     multiply,
//     divide
// };  //mjs

module.exports={add,subtract,multiply,divide}; //cjs

//same using arrow functions

const add=(a,b)=>a+b;
const subtract=(a,b)=>a-b;
const multiply=(a,b)=>a*b;
const divide=(a,b)=>b===0?"Cannot divide by zero":a/b;


