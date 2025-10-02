// let sum = 0;
// let i = 0;
// while(i<= 5){
//     sum = sum + i;
//     sum += 1
//     i++;
// }
// console.log(sum);

let countdown = []
// i = 5
// while(i>=1){
// countdown.push(i);
// i--
// }
// console.log(countdown);

let teaCollection = []
let tea 
do{
  tea =  prompt(`Enter tea name to store it in collection type ("stop") to stop collection`);
 if(tea!== "stop"){
    teaCollection.push(tea);
 }

}while(
tea !== "stop"
);

let total = 0;
let number = 1;
do{
    total = total + number;
    number++;

} while(
    number<=3
)
console.log(total);
    let multipliedNumber = [];
    let numbers = [2,4,6]
    for(let l= 0; l<numbers.length; l++){
        takenumber = numbers[l]*2
        multipliedNumber.push(takenumber)
    }
    console.log(multipliedNumber)
    console.log(numbers.length)
    let cities = ['paris', 'london','tokyo']
    let allCities = []
    for(let i = 0; i<cities.length; i++){
        takecity=cities[i]
        allCities.push(takecity)
    }
    console.log(allCities)