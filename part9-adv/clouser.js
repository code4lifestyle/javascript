function outer(){
        let counter = 5
        return function(){
            counter ++
            return counter;
        }
        
}
let counter = outer();
console.log(counter());
// it actullay retain the memory of function

function outerFunction(){
 let outerVar = "i am from outer function"
 function innerFunction(){
     console.log(outerVar)
 }
 return innerFunction
}
const myClouser = outerFunction;
myClouser();