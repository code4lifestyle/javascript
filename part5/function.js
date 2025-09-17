function makeTea(typeofTea){
    return `making ${typeofTea}`
}
let greet = makeTea('greenTea');
// console.log(greet);
function OrderTea(Teatype){
    function ConfirmOrder(){
        return`order Confirmed for Chai`
    }
    return ConfirmOrder();
}
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

function createTeamaker (){
    return function(teaType){
        return `making ${teaType}`
    }
}
let Teamaker = createTeamaker();
// console.log(Teamaker('greeting'));
let result = Teamaker('greeting tea');
console.log(result)