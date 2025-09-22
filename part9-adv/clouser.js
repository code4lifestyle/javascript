function outer(){
        let counter = 5
        return function(){
            counter ++
            return counter;
        }
        
}
let counter = outer();
console.log(counter())
// it actullay retain the memory of function