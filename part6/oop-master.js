// Encapsulation 
class vechileC1 {
    // proparties
    name;
    color;
    wheels;
    // constructor
    constructor(name,color,wheels){
        this.name = name;
        this.color = color;
        this.wheels = wheels
    };
    // methods
    getDetails(){
        console.log(`the ${this.name} is ${this.color} in color, it has ${this.wheels} wheels`)
    };
    };
   const veh1 = new vechileC1('scooter', 'grey', 3);
   console.log(veh1)