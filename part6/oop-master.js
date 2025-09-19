// // Encapsulation 
// class vechileC1 {
//     // proparties
//     name;
//     color;
//     wheels;
//     #regNumber;
//     // constructor
//     constructor(name,color,wheels, regnumber){
//         this.name = name;
//         this.color = color;
//         this.wheels = wheels;
//         this.#regNumber = regnumber;
//     };
//     // methods
//     getDetails(){
//         console.log(`the ${this.name} is ${this.color} in color, it has ${this.wheels} wheels its registration is ${this.#regNumber}`)
//     };
//     };
//    const veh1 = new vechileC1('scooter', 'grey', 3,222 );
//    console.log(veh1)
//  veh1.getDetails()

// let car = {
//     make : 'Doge',
//     model : 'black ghoost',
//     year : 1970,
//     start : function(){
//          return `${this.make} car got started in ${this.year} model ${this.model} is Realy Awesome`
//     }
// }
// // console.log(car.start());

// function Person(name,age){
//     this.name = name
//     this.age = age
// }
// let jhon  = new Person('jhon','23');
// // console.log(jhon.age)

// function Animal(type){
//     this.type = type
// }
// Animal.prototype.speak = function(){
//     return `${this.type} make a sound`
// }
// Array.prototype.shehzad = function(){
//     return `custom method ${this}`
//     }
// let myArray = [1,2,3,4];
// // console.log(myArray.shehzad())
// let mynewArray = [1,2,3,4,5,6,7];
// // console.log(mynewArray.shehzad())

// class Vechile{
//     constructor(make,model){
//     this.make = make
//     this.model = model
//     }
//     //method
//     start       (){
//         return `this ${this.model}  car is from ${this.make}`
//     }
// }

// class Car extends Vechile {
//     drive(){
//         return `${this.make} : this is an inheritance example`;
//     }
// }
// let myCar = new Car('toyota','Corola');
// console.log(myCar.start());
// console.log(myCar.drive());

// encapsulation 

class BankaccoundData{
    #balance = 0;

    deposit(amount){
        this.#balance +=amount;
        return this.#balance 
    }
    getBalance(){
        `$ ${this.#balance}`;
    }
}
let account = new Bankaccount();
console.log(account.balance);