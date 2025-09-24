// const person = {
//     name : 'shehzad',
//     greet(){
//         console.log(`hey my name is ${this.name}`)
//     },
    
// };
// person.greet();
// const GreetFunction = person.greet;
// GreetFunction();
// // ther person name will be undefined in greetfunction
// const bindGreet = person.greet.bind({name:'jhone'});
// bindGreet();
const User = {
    name : 'jhon',
    email : "jhone@gmail.com",
    welcomeMsg : function(){
        console.log(`${this.name}, welcome to website`);
        console.log(this)
    }
}
User.welcomeMsg();
User.name = "Sam";
User.welcomeMsg();