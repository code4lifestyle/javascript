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

let car = {
    make : 'Doge',
    model : 'black ghoost',
    year : 1970,
    start : function(){
         return `${this.make} car got started in ${this.year} model ${this.model} is Realy Awesome`
    }
}
// console.log(car.start());
