const person = {
    name : 'shehzad',
    greet(){
        console.log(`hey my name is ${this.name}`)
    },
    
};
person.greet();
const GreetFunction = person.greet;
GreetFunction();