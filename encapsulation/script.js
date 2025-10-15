const User = {
    name : 'shehzad',
    lastName : 'Shah',
    age : 28,

}
function getAgeYear(age){
   return new Date().getFullYear() - age;

}
// using encapsulation it will be

// const User ={
//     name : 'shehzad',
//     lastName : 'shah',
//     age : 28,
//     getAgeYear : function (){
//         return new Date().getFullYear() - User.age
//     }
// }