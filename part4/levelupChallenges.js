// let Teas = ['greentea', 'blacktea', 'chai', 'oolangtea'];
// let selectedtea = [];
// for(i=0; i<Teas.length; i++){
//     if(Teas[i]==='chai'){
//         break;
//     }
//     selectedtea.push(Teas[i]);

// }
// console.log(selectedtea);
// let cities = ['london','newyork','paris','berlin']
// let cityVisited = []
// for(i=0; i<cities.length; i++){
//     if(cities[i]!=='paris'){
//         cityVisited.push(cities[i]);
//     }
// }
// console.log(cityVisited);
// let cities = ["london", 'paris', "newyork", 'koyoto']
// let favCities = []
// for(i=0; i<cities.length; i++ ){
//     if(cities[i] !=='paris'){
//         favCities.push(cities[i])
//     }
// }
// console.log(favCities);
// const campaigns = [
//   { name: "car", employees: ["azhar", "sohaib", "shehzad"] },
//   { name: "health", employees: ["umar", "shbaz", "ali"] },
//   { name: "mortage", employees: ["umar", "wahid", "kamran"] }
// ];
// const selectedCampaigns = [];
// for (let i = 0; i < campaigns.length; i++) {
//     if(campaigns[i].name!=="car"){
//        selectedCampaigns.push(campaigns[i]);
//     }
// }
// console.log(selectedCampaigns);
// let cities = ['london', 'paris','tokyo', 'islamabad']
// let favCities = [];
// for(i=0; i<cities.length; i++){
//     if(cities[i]!=='islamabad'){
//         favCities.push(cities[i])
//     }
    
// }
// let numbers = [1,2,3,4,5,6]
// let smallNumber = []
// for (const number of numbers) {
//     if(number === 4){
//        break;
//     } 
//     smallNumber.push(number)
    
// }
// console.log(smallNumber)

// let teas = ['greentea','blacktea','yellow','olangtea','coffe']
// let favteas = [];
// for (const tea of teas) {
//     if(tea !== 'yellow'){
//          favteas.push(tea);
//     }
// }

// console.log(favteas)
let citiesPopulation = {
    germany :120000,
    paris : 300000,
    hongKong : 4500000,
    islamabad : 2200000
}
let largestCity = {}
// let cityPopulation = {}
// for (const city in citiesPopulation) {
//     if(city == "hongKong"){
//         break;
//     }
//     cityPopulation[city] = citiesPopulation[city]

// }
// console.log(cityPopulation)
for (const cities in citiesPopulation) {
    if(citiesPopulation[cities]>300000){
      largestCity[cities] = citiesPopulation[cities]
    }  
    
     
}
console.log(largestCity)