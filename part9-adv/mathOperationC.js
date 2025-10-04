//  name export

function add(a, b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}

// in commonJs we are export it as module.exports
module.exports = {
    add,
    subtract,
    multiply
}