// function Person(name,age){
//     this.name = name,
//     this.age = age
// }
// function Car(maker,model){
//     this.maker = maker,
//     this.model = model
// }
// let myPerson = new Person('shehzad',29)
// let myCar = new Car("toyota", "camry")
// // console.log(myCar);
// // console.log(myPerson);
// function Tea(type){
//     this.type = type;
//     this.describe = function(){
//         return `this is cup of ${this.type}`;
//     }
// }
// let lemonTea = new Tea('lemon Tea');
// console.log(lemonTea.describe());


















// function Tea(type){
//     this.type = type ;
//     this.describe = function(){
//         return `the name is ${type}`
//     }
// }
// let TeaType = new Tea('black tea')
// console.log(TeaType.describe())

function Teatype(type) {
    this.type = "any"; 
    this.des = function() {
        return `the key name is ${this.type}`;
    }
}

let a = new Teatype();
// console.log(a.des());


function Animal(species){
    this.species = species
}
Animal.prototype.sound = function(){
    return `${this.species} make a sound`
}
let dog = new Animal('dog');
console.log(dog.sound());