let Teas = ['greentea', 'blacktea', 'chai', 'oolangtea'];
let selectedtea = [];
for(i=0; i<Teas.length; i++){
    if(Teas[i]==='chai'){
        break;
    }
    selectedtea.push(Teas[i]);

}
console.log(selectedtea);
let cities = ['london','newyork','paris','berlin']
let cityVisited = []
for(i=0; i<cities.length; i++){
    if(cities[i]!=='paris'){
        cityVisited.push(cities[i]);
    }
}
console.log(cityVisited);