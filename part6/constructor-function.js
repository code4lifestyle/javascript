function Person(name,age){
    this.name = name,
    this.age = age
}
function Car(maker,model){
    this.maker = maker,
    this.model = model
}
let myPerson = new Person('shehzad',29)
let myCar = new Car("toyota", "camry")
// console.log(myCar);
// console.log(myPerson);
function Tea(type){
    this.type = type;
    this.describe = function(type){
        return `this is cup of ${this.type}`;
    }
}
let lemonTea = new Tea('lemon Tea');
console.log(lemonTea.describe());