// function makeTea(typeofTea){
//     return `making ${typeofTea}`
// }
// let greet = makeTea('greenTea');
// // console.log(greet);
// function OrderTea(Teatype){
//     function ConfirmOrder(){
//         return`order Confirmed for Chai`
//     }
//     return ConfirmOrder();
// }
let OrderConfirmation = OrderTea('chai')
// console.log(OrderConfirmation);

const CalculateTotal = (price, quantity) => {
return price * quantity
}
let totalCast = CalculateTotal(599 , 299);
// console.log(totalCast)
function makeTea(typeofTea){
    return `tea is ${typeofTea}`
}

function processTeaOrder(tea){
 return tea('earlgrey')
}
let order = processTeaOrder(makeTea);
// console.log(order)

// function createTeamaker (){
//     return function(teaType){
//         return `making ${teaType}`
//     }
// }
// let Teamaker = createTeamaker();
// // console.log(Teamaker('greeting'));
// let result = Teamaker('greeting tea');
// // console.log(result)
// function Aa (name){
// return (`hello ${name}`)
// }
// const namee = Aa('coffe');
// console.log(namee);
// function orderTea (teaType){
//     function cofirmOrder() {
//         return `order confirmed for Chai`;
//     }
//     return cofirmOrder();
// }
// let orderConfirmation = orderTea('chai');
// console.log(orderConfirmation);
// const CalculateTotal = (price, qunatity) => {
// return price * qunatity
// }
// let totalCost = CalculateTotal(400, 30);
// console.log(totalCost);

function createteaMaker(teaType){
      return function(tea){
        return `making green ${teaType}`
    }
}
let teaMaker = createteaMaker("greenTea")
console.log(teaMaker())