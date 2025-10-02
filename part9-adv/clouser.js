// function outer(){
//         let counter = 5
//         return function(){
//             counter ++
//             return counter;
//         }
        
// }
// let counter = outer();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// // it actullay retain the memory of function

// function outerFunction(){
//  let outerVar = "i am from outer function"
//  function innerFunction(){
//      console.log(outerVar)
//  }
//  return innerFunction
// }
// const myClouser = outerFunction;
// myClouser();


// message = "good global"
// function hello1(){
//     message = 'good Morning';
//     {
//     console.log("hello  1", + message)

//     }
// }
// hello1();

// function Outer(){
//     let counter = 4;
//     return function(){
//         counter ++
//         return counter;
//     }
// }
let increament = Outer();
console.log(increament());
console.log(increament());
console.log(increament());
function OuterFunction (){
    let OuterVariable = "i am outer Variable"
    function innerFunction(){
        console.log(OuterVariable)
    }
    return innerFunction();
}
const Clouser = OuterFunction();
console.log(Clouser);

function main(){
    let name = "Jhone"
    function saymyName(){
        console.log(name);
    }
    let sayName = saymyName();
    console.log(sayName);
}
let mainfn = main();
console.log(mainfn);

