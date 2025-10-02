// function Person(name){
//     this.name = name 
// }
// Person.prototype.greet = function(){
//     console.log(`Hello my name is ${this.name}`)
// }
// let personNAme = new Person('personNAme')
// personNAme.greet();

// const p1 = {
//     fname :'jhon',
//     lname : "Dov",
//     getFullname(){
//         return `${this.fname} ${this.lname}`
//     }
// }
// const p2 = Object.create(p1)
// p2.__proto__.fname = "ali"
// console.log("p1 is", p1.getFullname());
// console.log("p2 is", p2.getFullname());
// console.log("replace value", p1.fname)
const p1 = {
    xp1 : "i am inside p1"
}
const p2 = {
    xp2 : "i am inside p2",
    __proto__ : p1
}
console.log(p2)